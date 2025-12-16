import React from 'react';
import styles from './EventList.module.css';
import { demoEvents } from '../../Data/Events/DemoEvents.js';

interface EventItem {
    id: string;
    date: string;
    published?: string;
    title: string;
    description: string;
    body: string;
    mode: string;
    location: string;
    relatedLinks?: string[];
}

function parseDisplayDate(d: string): number {
    const cleaned = d.replace(/(\d+)(st|nd|rd|th)/, '$1');
    const parsed = Date.parse(cleaned);
    return isNaN(parsed) ? 0 : parsed;
}


export default function PastEventsList() {
    const [openId, setOpenId] = React.useState<string | null>(null);
    const [returnFocusEl, setReturnFocusEl] = React.useState<HTMLElement | null>(null);
    const sorted = React.useMemo<EventItem[]>(() => {
        return [...demoEvents].sort((a, b) => parseDisplayDate(b.date) - parseDisplayDate(a.date));
    }, []);
    const nowTs = Date.now();
    const past = sorted.filter(e => parseDisplayDate(e.date) <= nowTs);
    const active = openId ? past.find(e => e.id === openId) : null;
    const dialogRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape' && openId) {
                e.preventDefault();
                setOpenId(null);
                if (returnFocusEl) returnFocusEl.focus();
            }
        }
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [openId, returnFocusEl]);

    React.useEffect(() => {
        if (active && dialogRef.current) {
            const closeBtn = dialogRef.current.querySelector('button.closeBtn');
            (closeBtn as HTMLElement)?.focus?.();
        }
    }, [active]);

    return (
        <>
            <h2 className={styles.sectionHeading} style={{ marginBottom: '1rem' }}>Previous Events</h2>
            <div
                className={styles.wrapper}
                style={{
                    border: '2px solid #ccc',
                    borderRadius: '1rem',
                    padding: '2rem',
                    background: '#fff',
                    maxHeight: '70vh',
                    overflowY: 'auto',
                }}
            >
                <ul className={styles.list} aria-label="Previous Headlamp events">
                    {past.map(item => (
                        <li key={item.id}>
                            <button
                                type="button"
                                className={styles.itemButton}
                                onClick={e => { setReturnFocusEl(e.currentTarget); setOpenId(item.id); }}
                                aria-haspopup="dialog"
                                aria-controls={openId === item.id ? `${item.id}-dialog` : undefined}
                            >
                                <span className={styles.itemEventDate}>{item.date}</span>
                                <span className={styles.itemTitle}>{item.title}</span>
                                <span className={styles.itemDesc}>{item.description}</span>
                            </button>
                        </li>
                    ))}
                </ul>
                {active && <div className={styles.overlay} role="presentation" onClick={() => setOpenId(null)} />}
                {active && (
                    <div
                        id={`${active.id}-dialog`}
                        className={styles.modal}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={`${active.id}-title`}
                        aria-describedby={`${active.id}-body`}
                        ref={dialogRef}
                        onClick={e => { if (e.target === e.currentTarget) setOpenId(null); }}
                    >
                        <div className={styles.modalInner}>
                            <div className={styles.modalHeader}>
                                <h3 id={`${active.id}-title`} className={styles.modalTitle}>{active.title}</h3>
                                <button type="button" onClick={() => setOpenId(null)} className={`${styles.closeBtn} closeBtn`} aria-label="Close event dialog">×</button>
                            </div>
                            <p className={styles.modalMeta}>{active.date} • {active.location} • {active.mode}</p>
                            <div id={`${active.id}-body`} className={styles.modalBody}>
                                {active.body.split('\n').map((para, i) => <p key={i}>{para}</p>)}
                            </div>
                            {active.relatedLinks && active.relatedLinks.length > 0 && (
                                <footer className={styles.modalFooter} aria-label="Related links section">
                                    <h4 className={styles.relatedHeading}>Related links</h4>
                                    <ul className={styles.relatedList}>
                                        {active.relatedLinks.map((url, i) => (
                                            <li key={i} className={styles.relatedItem}>
                                                <a href={url} target="_blank" rel="noopener noreferrer" className={styles.relatedLink}>{url}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </footer>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
