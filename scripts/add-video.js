#!/usr/bin/env node
const https = require('https');
const fs = require('fs');
const path = require('path');

// Simple CLI parsing (no deps)
const args = process.argv.slice(2);
const opts = {};
for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--url' || a === '-u') opts.url = args[++i];
    else if (a === '--cat' || a === '-c') opts.cat = args[++i];
    else if (a === '--help' || a === '-h') opts.help = true;
}

if (opts.help || !opts.url || !opts.cat) {
    console.log('Usage: node scripts/add-video.js --url <youtube-url> --cat <live|demo|other>');
    process.exit(opts.help ? 0 : 1);
}

// Normalize category
function mapCategory(input) {
    if (!input) return 'Other';
    const s = String(input).toLowerCase();
    if (s.includes('live')) return 'Livestreams';
    if (s.includes('demo')) return 'Demos';
    return 'Other';
}

function extractYouTubeUrlId(url) {
    try {
        const u = new URL(url);
        if (u.hostname === 'youtu.be') return u.pathname.slice(1);
        if (u.hostname.endsWith('youtube.com')) {
            return u.searchParams.get('v');
        }
    } catch (e) {
        return null;
    }
    return null;
}

function ordinal(d) {
    const j = d % 10,
        k = d % 100;
    if (j == 1 && k != 11) return d + 'st';
    if (j == 2 && k != 12) return d + 'nd';
    if (j == 3 && k != 13) return d + 'rd';
    return d + 'th';
}

function formatDisplayDate(dt) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = ordinal(dt.getDate());
    return `${months[dt.getMonth()]} ${day} ${dt.getFullYear()}`;
}

const videoUrl = opts.url;
const category = mapCategory(opts.cat);
const dataFile = path.join(__dirname, '..', 'src', 'components', 'Community', 'Data', 'Videos', 'RealVideoData.js');

function fetchOEmbed(url, cb) {
    const oeUrl = 'https://www.youtube.com/oembed?format=json&url=' + encodeURIComponent(url);
    https.get(oeUrl, (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
            if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
                try {
                    const json = JSON.parse(body);
                    cb(null, json);
                } catch (e) { cb(e); }
            } else {
                cb(new Error('oEmbed request failed: ' + res.statusCode + ' ' + body));
            }
        });
    }).on('error', (err) => cb(err));
}

fetchOEmbed(videoUrl, (err, meta) => {
    if (err) {
        console.error('Failed to fetch metadata:', err.message);
        process.exit(1);
    }

    const id = extractYouTubeUrlId(videoUrl) || ('yt-' + Date.now());
    const title = meta.title || 'Untitled video';
    const thumbnail = meta.thumbnail_url || '';
    const date = formatDisplayDate(new Date());

    const entry = {
        id: id,
        title: title,
        date: date,
        link: videoUrl,
        image: thumbnail,
        category: category
    };

    // Read existing file
    let content = '';
    try {
        content = fs.readFileSync(dataFile, 'utf8');
    } catch (e) {
        console.error('Could not read RealVideoData.js:', e.message);
        process.exit(1);
    }

    const entryText = JSON.stringify(entry, null, 2);

    // If the file already contains this URL or id, skip
    if (content.includes(videoUrl) || content.includes(`"id": "${id}"`)) {
        console.log('Entry already exists in RealVideoData.js — skipping.');
        process.exit(0);
    }

    // Try to find the `const realVideos = [ ... ];` array and append inside it
    const constMatch = content.match(/const\s+realVideos\s*=\s*\[/m);
    if (constMatch) {
        const startIdx = content.indexOf('[', constMatch.index);
        // find matching closing bracket for the array
        let depth = 0;
        let lastIdx = -1;
        for (let i = startIdx; i < content.length; i++) {
            const ch = content[i];
            if (ch === '[') depth++;
            else if (ch === ']') {
                depth--;
                if (depth === 0) { lastIdx = i; break; }
            }
        }
        if (lastIdx === -1) {
            console.error('RealVideoData.js appears malformed (no closing bracket for realVideos array).');
            process.exit(1);
        }
        const inside = content.slice(startIdx + 1, lastIdx).trim();
        const needsComma = inside.length > 0;
        const insertion = (needsComma ? ',\n' : '\n') + '  ' + entryText + '\n';
        const newContent = content.slice(0, lastIdx) + insertion + content.slice(lastIdx);
        fs.writeFileSync(dataFile, newContent, 'utf8');
        console.log('Appended video to RealVideoData.js');
        process.exit(0);
    }

    // Fallback: if no recognizable array, create a new file but do not overwrite silently
    const backupPath = dataFile + '.bak.' + Date.now();
    fs.copyFileSync(dataFile, backupPath);
    const newFile = `// Video data store for community videos. Each entry has: { id, title, date, link, image, category }\nconst realVideos = [\n  ${entryText}\n];\n\nexport default realVideos;\n`;
    fs.writeFileSync(dataFile, newFile, 'utf8');
    console.log('RealVideoData.js did not contain a parsable array; created new file and saved backup to', backupPath);
    process.exit(0);
});





// node scripts/add-video.js --url "https://www.youtube.com/watch?v=VFOSyKVOPxs" --cat "live"

// node scripts/add-video.js --url "https://www.youtube.com/watch?v=0AFvS9nxFE8" --cat "demo"
