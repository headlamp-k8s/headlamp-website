#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// This script is hard-coded to operate on the repository's
// `src/components/Community/Data/Announcements/Real` directory.
// It looks for JSON "post" files inside a `posts` subdirectory
// (i.e. `.../Real/posts/*.json`) and adds any announcements that
// are missing to `RealAnnouncementN.js` files. Existing files are not overwritten.

const repoRoot = process.cwd();
const targetDir = path.join(repoRoot, 'src', 'components', 'Community', 'Data', 'Announcements', 'Real');
// Read JSON announcement files directly from the Real directory.
// This allows placing `*.json` files into the Real dir and running this script.
if (!fs.existsSync(targetDir)) {
    console.error('Target Real announcements directory not found:', targetDir);
    process.exit(1);
}

function readPosts() {
    // read .json files in targetDir (ignore JS files)
    const files = fs.readdirSync(targetDir).filter(n => /\.json$/i.test(n));
    const items = [];
    for (const f of files) {
        try {
            const raw = fs.readFileSync(path.join(targetDir, f), 'utf8');
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) items.push(...parsed);
            else items.push(parsed);
        } catch (e) {
            console.warn('Skipping', f, '- failed to parse JSON:', e.message);
        }
    }
    return items;
}

function existingFiles() {
    const out = [];
    const names = fs.readdirSync(targetDir).filter(n => /^RealAnnouncement\d+\.(js|json)$/.test(n));
    for (const n of names) {
        const p = path.join(targetDir, n);
        try { out.push({ name: n, text: fs.readFileSync(p, 'utf8') }); } catch (e) { }
    }
    return out;
}

const posts = readPosts();
if (posts.length === 0) {
    console.log('No announcement JSON files found in', targetDir);
    process.exit(0);
}

const existing = existingFiles();
const existingIds = new Set();
for (const ef of existing) {
    const m = ef.text.match(/\"id\"\s*:\s*\"([^\"]+)\"/);
    if (m) existingIds.add(m[1]);
}

const usedIndexes = new Set(existing.map(e => {
    const m = e.name.match(/RealAnnouncement(\d+)\.(js|json)/);
    return m ? Number(m[1]) : null;
}).filter(Boolean));

function findNextFreeIndex() {
    let i = 1;
    while (true) { if (!usedIndexes.has(i)) return i; i++; }
}

let added = 0;
for (const item of posts) {
    if (!item || typeof item !== 'object') continue;
    if (item.id && existingIds.has(item.id)) {
        console.log('Already present, skipping id:', item.id);
        continue;
    }
    const idx = findNextFreeIndex();
    const filename = `RealAnnouncement${idx}.json`;
    const filepath = path.join(targetDir, filename);
    const content = JSON.stringify(item, null, 2) + '\n';
    if (fs.existsSync(filepath)) {
        console.log('Unexpected existing file, skipping:', filename);
        usedIndexes.add(idx);
        continue;
    }
    fs.writeFileSync(filepath, content, 'utf8');
    console.log('Created', filename, 'for id:', item.id || '(no id)');
    existingIds.add(item.id || (`generated-${Date.now()}`));
    usedIndexes.add(idx);
    added++;
}

// regenerate aggregate
function regenerateAggregate() {
    // include .js and .json RealAnnouncement files
    const names = fs.readdirSync(targetDir).filter(n => /^RealAnnouncement\d+\.(js|json)$/.test(n));
    const keyed = names.map(n => ({ n, idx: Number(n.match(/RealAnnouncement(\d+)\.(js|json)/)[1]) }));
    keyed.sort((a, b) => a.idx - b.idx);
    const imports = keyed.map((k, i) => `import a${i + 1} from './${k.n}';`).join('\n');
    const arrNames = keyed.map((_, i) => `a${i + 1}`).join(', ');
    const content = imports + '\n\n' + `export const realAnnouncements = [${arrNames}];\n\nexport default realAnnouncements;\n`;
    fs.writeFileSync(path.join(targetDir, 'RealAnnouncements.js'), content, 'utf8');
    console.log('Regenerated RealAnnouncements.js with', keyed.length, 'items');
}

regenerateAggregate();
console.log('Done. Added', added, 'announcements (skipped existing ones).');




// node scripts/update-announcements.js