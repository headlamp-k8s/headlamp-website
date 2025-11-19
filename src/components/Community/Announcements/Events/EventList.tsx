import React from 'react';
import PastEventsList from './PastEventsList';
import styles from './EventList.module.css';
import { demoEvents } from '../../Data/Events/DemoEvents.js';

interface EventItem {
    id: string;
    date: string; // display date
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

export default function EventList() {
    const [openId, setOpenId] = React.useState<string | null>(null);
    const [returnFocusEl, setReturnFocusEl] = React.useState<HTMLElement | null>(null);

    const sorted = React.useMemo<EventItem[]>(() => {
        return [...demoEvents].sort((a, b) => parseDisplayDate(b.date) - parseDisplayDate(a.date));
    }, []);

    const nowTs = Date.now();
    // Categorize into this week, upcoming, past
    const thisWeek: EventItem[] = [];
    const upcoming: EventItem[] = [];
    const past: EventItem[] = [];
    const nowDate = new Date(nowTs);
    // Define week as Monday-Sunday of current week
    const day = nowDate.getDay(); // 0 Sun .. 6 Sat
    const diffToMonday = (day === 0 ? -6 : 1) - day; // adjust so Monday is start
    const startOfWeek = new Date(nowDate);
    startOfWeek.setDate(nowDate.getDate() + diffToMonday);
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    sorted.forEach(e => {
        const ts = parseDisplayDate(e.date);
        const d = new Date(ts);
        if (ts > nowTs) {
            if (d >= startOfWeek && d <= endOfWeek) {
                thisWeek.push(e);
            } else {
                upcoming.push(e);
            }
        } else {
            past.push(e);
        }
    });
    // Sort sections
    thisWeek.sort((a, b) => parseDisplayDate(a.date) - parseDisplayDate(b.date));
    upcoming.sort((a, b) => parseDisplayDate(a.date) - parseDisplayDate(b.date));
    past.sort((a, b) => parseDisplayDate(b.date) - parseDisplayDate(a.date));

    const open = (id: string, el: HTMLElement) => {
        setReturnFocusEl(el);
        setOpenId(id);
    };
    const close = () => {
        setOpenId(null);
        if (returnFocusEl) returnFocusEl.focus();
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

    const active = openId ? sorted.find(e => e.id === openId) : null;

    const dialogRef = React.useRef<HTMLDivElement | null>(null);
    React.useEffect(() => {
        if (active && dialogRef.current) {
            const closeBtn = dialogRef.current.querySelector('button.closeBtn');
            (closeBtn as HTMLElement)?.focus?.();
        }
    }, [active]);

    // Helpers for event date label (left)
    const getEventDateInfo = React.useCallback((dateStr: string) => {
        const ts = parseDisplayDate(dateStr);
        const now = new Date();
        const d = new Date(ts);
        const isFuture = ts > now.getTime();
        // Recompute current week for classification (avoid closure staleness if date changes)
        const day = now.getDay();
        const diffToMonday = (day === 0 ? -6 : 1) - day;
        const start = new Date(now);
        start.setDate(now.getDate() + diffToMonday);
        start.setHours(0, 0, 0, 0);
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        end.setHours(23, 59, 59, 999);
        const inThisWeek = d >= start && d <= end && isFuture;
        if (inThisWeek) {
            return { text: `Event Date: ${dateStr}`, cls: 'eventDateSoon' } as const; // green
        }
        if (isFuture) {
            return { text: `Event Date: ${dateStr}`, cls: 'eventDateFuture' } as const; // blue
        }
        return { text: `Event Date: ${dateStr}`, cls: 'eventDatePast' } as const;
    }, []);

    return (
        <>
            <div className={styles.wrapper}>
                {thisWeek.length > 0 && (
                    <div className={styles.weekSection}>
                        <h2 className={styles.sectionHeading}>This Week</h2>
                        <ul className={styles.list} aria-label="This week Headlamp events">
                            {thisWeek.map(item => (
                                <li key={item.id}>
                                    <button
                                        type="button"
                                        className={styles.itemButton}
                                        onClick={(e) => open(item.id, e.currentTarget)}
                                        aria-haspopup="dialog"
                                        aria-controls={openId === item.id ? `${item.id}-dialog` : undefined}
                                    >
                                        {(() => {
                                            const info = getEventDateInfo(item.date); return (
                                                <span className={[styles.itemEventDate, (styles as any)[info.cls]].join(' ')}>{info.text}</span>
                                            );
                                        })()}
                                        <span className={styles.itemTitle}>{item.title}</span>
                                        <span className={styles.itemSubline}>{(() => {
                                            const m = item.mode;
                                            const label = m === 'virtual' ? 'Online' : (m === 'in-person' ? 'In-person' : (m === 'hybrid' ? 'Hybrid' : m));
                                            return `${label} • ${item.location}`;
                                        })()}</span>
                                        <span className={styles.itemDesc}>{item.description}</span>
                                        <span className={styles.publishedWrap}>
                                            <span className={styles.publishedLabel}>Published</span>
                                            <span className={styles.publishedDate}>{(item.published ?? item.date)}</span>
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {upcoming.length > 0 && (
                    <>
                        <h2 className={styles.sectionHeading}>Upcoming Events</h2>
                        <ul className={styles.list} aria-label="Upcoming Headlamp events">
                            {upcoming.map(item => (
                                <li key={item.id}>
                                    <button
                                        type="button"
                                        className={styles.itemButton}
                                        onClick={(e) => open(item.id, e.currentTarget)}
                                        aria-haspopup="dialog"
                                        aria-controls={openId === item.id ? `${item.id}-dialog` : undefined}
                                    >
                                        {(() => {
                                            const info = getEventDateInfo(item.date); return (
                                                <span className={[styles.itemEventDate, (styles as any)[info.cls]].join(' ')}>{info.text}</span>
                                            );
                                        })()}
                                        <span className={styles.itemTitle}>{item.title}</span>
                                        <span className={styles.itemSubline}>{(() => {
                                            const m = item.mode;
                                            const label = m === 'virtual' ? 'Online' : (m === 'in-person' ? 'In-person' : (m === 'hybrid' ? 'Hybrid' : m));
                                            return `${label} • ${item.location}`;
                                        })()}</span>
                                        <span className={styles.itemDesc}>{item.description}</span>
                                        <span className={styles.publishedWrap}>
                                            <span className={styles.publishedLabel}>Published</span>
                                            <span className={styles.publishedDate}>{(item.published ?? item.date)}</span>
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                <div className={styles.listFooter}>
                    <button
                        type="button"
                        className={styles.nextBtn}
                        disabled
                        aria-label="Next page of events (placeholder)"
                    >
                        Next &gt;
                    </button>
                </div>
                {active && <div className={styles.overlay} role="presentation" onClick={close} />}
                {active && (
                    <div
                        id={`${active.id}-dialog`}
                        className={styles.modal}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={`${active.id}-title`}
                        aria-describedby={`${active.id}-body`}
                        ref={dialogRef}
                        onClick={(e) => { if (e.target === e.currentTarget) close(); }}
                    >
                        <div className={styles.modalInner}>
                            <div className={styles.modalHeader}>
                                <h3 id={`${active.id}-title`} className={styles.modalTitle}>{active.title}</h3>
                                <button type="button" onClick={close} className={`${styles.closeBtn} closeBtn`} aria-label="Close event dialog">×</button>
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
            <PastEventsList />
        </>
    );
}
