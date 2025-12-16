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

export default function UpcomingEventsList() {
    const sorted = React.useMemo<EventItem[]>(() => {
        return [...demoEvents].sort((a, b) => parseDisplayDate(a.date) - parseDisplayDate(b.date));
    }, []);
    const nowTs = Date.now();
    const upcoming = sorted.filter(e => parseDisplayDate(e.date) > nowTs);
    return (
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
            <h2 className={styles.sectionHeading}>Upcoming Events</h2>
            <ul className={styles.list} aria-label="Upcoming Headlamp events">
                {upcoming.map(item => (
                    <li key={item.id}>
                        <span className={styles.itemEventDate}>{item.date}</span>
                        <span className={styles.itemTitle}>{item.title}</span>
                        <span className={styles.itemDesc}>{item.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
