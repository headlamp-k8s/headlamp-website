import React from 'react';
import styles from './ReleaseNotesList.module.css';

export interface ReleaseNoteItem {
    id: string;
    title: string;
    date: string;
    body: string;
}

interface Props {
    item: ReleaseNoteItem;
    onOpen: (id: string, el: HTMLElement) => void;
    isOpen: boolean;
}

function getVersion(item: ReleaseNoteItem): string {
    const titleMatch = item.title.match(/v\d+\.\d+\.\d+/);
    if (titleMatch) return 'ver ' + titleMatch[0].replace(/^v/, '');
    const idMatch = item.id.match(/v\d+-\d+-\d+/);
    if (idMatch) return 'ver ' + idMatch[0].replace(/-/g, '.').replace(/^v/, '');
    return 'ver ?';
}

export default function ReleaseNotesItem({ item, onOpen }: Props) {
    // Extract Overview section from body (text after 'Overview:' heading up to next section header or double newline boundary).
    function extractOverview(body: string): string {
        const match = body.match(/Overview:\n([\s\S]*?)(?:\n\n[A-Z][^\n]*:|\n\n$)/);
        if (match) return match[1].trim();
        // Fallback: first non-empty paragraph not a header line ending with ':'
        const blocks = body.split(/\n\n+/).map(b => b.trim()).filter(Boolean);
        const firstText = blocks.find(b => !/^\w[^\n]*:$/.test(b)) || '';
        return firstText.replace(/^Overview:\s*/i, '').trim();
    }
    const overview = extractOverview(item.body);
    // We display full overview; optionally truncate if extremely long.
    const MAX_OVERVIEW = 600;
    const overviewDisplay = overview.length > MAX_OVERVIEW ? overview.slice(0, MAX_OVERVIEW - 3).trimEnd() + '…' : overview;

    const handleKey: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const target = e.currentTarget.querySelector('button.readMoreBtn') as HTMLElement | null;
            if (target) target.click();
        }
    };

    return (
        <li className={styles.listItem}>
            <div
                className={styles.itemCard}
                role="group"
                tabIndex={0}
                onKeyDown={handleKey}
                aria-label={`Release notes card for ${item.title}`}
            >
                <span className={styles.versionWrap}>
                    <span className={styles.versionValue}>{getVersion(item)}</span>
                    <span className={styles.versionDate}>{item.date}</span>
                </span>
                <div className={styles.cardContent}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemExcerpt}>{overviewDisplay}</p>
                    <div className={styles.cardFooter}>
                        <button
                            type="button"
                            className={`readMoreBtn ${styles.readMoreBtn}`}
                            onClick={(e) => onOpen(item.id, e.currentTarget)}
                            aria-haspopup="dialog"
                            aria-controls={`${item.id}-dialog`}
                        >
                            Read More ›
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}
