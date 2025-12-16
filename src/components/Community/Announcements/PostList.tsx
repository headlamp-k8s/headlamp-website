import React from 'react';
import styles from './PostList.module.css';
import { realAnnouncements } from '../Data/Announcements/Real/RealAnnouncements.js';

interface AnnouncementItem {
    id: string;
    date: string; // display date e.g. "Nov 19th 2025"
    image: string;
    category: string; // using string since imported JS loses literal type
    title: string;
    description: string;
    body: string;
    relatedLinks?: string[];
}

// Helper: normalize ordinal date strings for simple sorting (newest first)
function parseDisplayDate(d: string): number {
    // Remove ordinal suffixes and build a Date; fallback to 0
    const cleaned = d.replace(/(\d+)(st|nd|rd|th)/, '$1');
    const parsed = Date.parse(cleaned);
    return isNaN(parsed) ? 0 : parsed;
}

export default function PostList() {
    const [openId, setOpenId] = React.useState<string | null>(null);
    const [returnFocusEl, setReturnFocusEl] = React.useState<HTMLElement | null>(null);

    const sorted = React.useMemo<AnnouncementItem[]>(() => {
        return [...realAnnouncements].sort((a, b) => parseDisplayDate(b.date) - parseDisplayDate(a.date));
    }, []);

    const open = (id: string, el: HTMLElement) => {
        setReturnFocusEl(el);
        setOpenId(id);
    };
    const close = () => {
        setOpenId(null);
        if (returnFocusEl) {
            returnFocusEl.focus();
        }
    };

    React.useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape' && openId) {
                e.preventDefault();
                close();
            }
        }
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [openId]);

    const active = openId ? sorted.find(a => a.id === openId) : null;

    // Set initial focus into dialog when it opens
    const dialogRef = React.useRef<HTMLDivElement | null>(null);
    React.useEffect(() => {
        if (active && dialogRef.current) {
            const closeBtn = dialogRef.current.querySelector('button.closeBtn');
            (closeBtn as HTMLElement)?.focus?.();
        }
    }, [active]);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Announcements</h2>
            <ul className={styles.list} role="list" aria-label="Headlamp announcements list">
                {sorted.map(item => (
                    <li key={item.id} className={styles.listItem}>
                        <button
                            type="button"
                            className={styles.itemButton}
                            onClick={(e) => open(item.id, e.currentTarget)}
                            aria-haspopup="dialog"
                            aria-controls={openId === item.id ? `${item.id}-dialog` : undefined}
                        >
                            <span className={styles.itemTitle}>{item.title}</span>
                            <span className={styles.itemDesc}>{item.description}</span>
                            <span className={styles.publishedWrap}>
                                <span className={styles.publishedLabel}>Published</span>
                                <span className={styles.publishedDate}>{item.date}</span>
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
            <div className={styles.listFooter}>
                <button
                    type="button"
                    className={styles.nextBtn}
                    disabled
                    aria-label="Next page of announcements (placeholder)"
                >
                    Next &gt;
                </button>
            </div>
            {active && (
                <div className={styles.overlay} role="presentation" onClick={close} />
            )}
            {active && (
                <div
                    id={`${active.id}-dialog`}
                    className={styles.modal}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={`${active.id}-title`}
                    aria-describedby={`${active.id}-body`}
                    ref={dialogRef}
                    onClick={(e) => {
                        // Close when clicking the modal backdrop area (outside the inner card)
                        if (e.target === e.currentTarget) {
                            close();
                        }
                    }}
                >
                    <div className={styles.modalInner}>
                        <div className={styles.modalHeader}>
                            <h3 id={`${active.id}-title`} className={styles.modalTitle}>{active.title}</h3>
                            <button type="button" onClick={close} className={`${styles.closeBtn} closeBtn`} aria-label="Close announcement dialog">×</button>
                        </div>
                        <p className={styles.modalDate}>{active.date}</p>
                        <div id={`${active.id}-body`} className={styles.modalBody}>
                            {active.body.split('\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                        {active.relatedLinks && active.relatedLinks.length > 0 && (
                            <footer className={styles.modalFooter} aria-label="Related links section">
                                <h4 className={styles.relatedHeading}>Related links</h4>
                                <ul className={styles.relatedList}>
                                    {active.relatedLinks.map((url, i) => (
                                        <li key={i} className={styles.relatedItem}>
                                            <a
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.relatedLink}
                                            >
                                                {url}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </footer>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
