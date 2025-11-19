import React from 'react';
import { demoReleaseNotes } from './DemoReleaseNotes.js';
import styles from './ReleaseNotesList.module.css';
import ReleaseNotesItem from '../../ReleaseNotes/ReleaseNotesItem.jsx';

function parseDisplayDate(d: string): number {
    const cleaned = d.replace(/(\d+)(st|nd|rd|th)/, '$1');
    const parsed = Date.parse(cleaned);
    return isNaN(parsed) ? 0 : parsed;
}

export default function ReleaseNotesList() {
    const [openId, setOpenId] = React.useState<string | null>(null);
    const [returnFocusEl, setReturnFocusEl] = React.useState<HTMLElement | null>(null);

    const sorted = React.useMemo(() => {
        return [...demoReleaseNotes].sort((a, b) => parseDisplayDate(b.date) - parseDisplayDate(a.date));
    }, []);

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

    const active = openId ? sorted.find(r => r.id === openId) : null;
    const dialogRef = React.useRef<HTMLDivElement | null>(null);
    React.useEffect(() => {
        if (active && dialogRef.current) {
            const closeBtn = dialogRef.current.querySelector('button.closeBtn');
            (closeBtn as HTMLElement)?.focus?.();
        }
    }, [active]);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Release Notes</h2>
            <ul className={styles.list} aria-label="Headlamp release notes list">
                {sorted.map(item => (
                    <ReleaseNotesItem key={item.id} item={item} onOpen={open} isOpen={openId === item.id} />
                ))}
            </ul>
            <div className={styles.listFooter}>
                <button
                    type="button"
                    className={styles.nextBtn}
                    disabled
                    aria-label="Next page of release notes (placeholder)"
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
                    onClick={e => { if (e.target === e.currentTarget) close(); }}
                >
                    <div className={styles.modalInner}>
                        <div className={styles.modalHeader}>
                            <h3 id={`${active.id}-title`} className={styles.modalTitle}>{active.title}</h3>
                            <button type="button" onClick={close} className={`${styles.closeBtn} closeBtn`} aria-label="Close release notes dialog">×</button>
                        </div>
                        <p className={styles.modalDate}>{active.date}</p>
                        <div id={`${active.id}-body`} className={styles.modalBody}>
                            {active.body.split('\n').map((para, i) => <p key={i}>{para}</p>)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

