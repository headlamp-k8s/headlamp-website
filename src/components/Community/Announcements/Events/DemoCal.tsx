import React from 'react';
import { demoEvents } from '../../Data/Events/DemoEvents.js';

export default function DemoCal() {
    // Calendar grid for current month
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const monthName = now.toLocaleString('default', { month: 'long' });
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    // Calendar starts on Sunday (0)
    const weeks: number[][] = [];
    let week: number[] = Array(firstDay).fill(0); // pad with zeros for empty days
    for (let day = 1; day <= daysInMonth; day++) {
        week.push(day);
        if (week.length === 7) {
            weeks.push(week);
            week = [];
        }
    }
    if (week.length) {
        while (week.length < 7) week.push(0);
        weeks.push(week);
    }
    // Robust event date parsing and mapping
    const eventsByDay = React.useMemo(() => {
        const map = {};
        for (const event of demoEvents || []) {
            let d;
            // Try to parse date string robustly
            if (typeof event.date === 'string') {
                // Remove ordinal suffixes (e.g., '1st', '2nd')
                const cleaned = event.date.replace(/(\d+)(st|nd|rd|th)/, '$1');
                d = new Date(cleaned);
            } else {
                d = new Date(event.date);
            }
            if (!isNaN(d)) {
                if (d.getFullYear() === year && d.getMonth() === month) {
                    const day = d.getDate();
                    if (!map[day]) map[day] = [];
                    map[day].push(event);
                }
            }
        }
        return map;
    }, [year, month]);

    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedEvents, setSelectedEvents] = React.useState([]);

    const handleDayClick = (day: number) => {
        if (eventsByDay[day]) {
            setSelectedEvents(eventsByDay[day]);
            setModalOpen(true);
        }
    };

    return (
        <aside style={{
            minWidth: 400,
            maxWidth: 600,
            background: 'var(--ifm-background-surface-color, #faf9f6)',
            borderRadius: 10,
            border: '1px solid var(--ifm-toc-border-color, #e0e0e0)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            padding: '1.1rem 1rem 1rem',
            marginRight: '2rem',
            marginBottom: '2rem',
            marginTop: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }} aria-label="Demo Calendar">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.7rem', color: 'var(--ifm-color-primary)', textAlign: 'center' }}>
                {monthName} {year}
            </h3>
            <table style={{ width: '100%', background: '#fff', borderRadius: 8, border: '1px solid #eee', color: '#222', fontSize: '1.1rem', textAlign: 'center', tableLayout: 'fixed' }}>
                <thead>
                    <tr style={{ color: '#bbb', fontWeight: 500 }}>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week, i) => (
                        <tr key={i}>
                            {week.map((day, j) => {
                                const hasEvent = day && eventsByDay[day] && eventsByDay[day].length > 0;
                                if (hasEvent) {
                                    return (
                                        <td
                                            key={j}
                                            style={{
                                                padding: '0.5rem',
                                                opacity: 1,
                                                background: '#ffe066',
                                                border: '1px solid #e6b800',
                                                borderRadius: '6px',
                                                cursor: 'pointer',
                                                fontWeight: 600,
                                            }}
                                            onClick={() => handleDayClick(day)}
                                            title={eventsByDay[day].map(ev => ev.title).join(', ')}
                                        >
                                            {day}
                                        </td>
                                    );
                                }
                                return (
                                    <td
                                        key={j}
                                        style={{
                                            padding: '0.5rem',
                                            opacity: day ? 1 : 0.3,
                                        }}
                                    >
                                        {day ? day : ''}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
            {modalOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(0,0,0,0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                    }}
                    onClick={() => setModalOpen(false)}
                >
                    <div
                        style={{
                            background: '#fff',
                            borderRadius: 10,
                            boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
                            padding: '2rem 2.5rem',
                            minWidth: 320,
                            maxWidth: 420,
                            position: 'relative',
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            style={{
                                position: 'absolute',
                                top: 12,
                                right: 16,
                                background: 'none',
                                border: 'none',
                                fontSize: 22,
                                cursor: 'pointer',
                                color: '#888',
                            }}
                            onClick={() => setModalOpen(false)}
                            aria-label="Close"
                        >
                            ×
                        </button>
                        <h4 style={{ marginBottom: '1rem', fontWeight: 700, color: '#e6b800' }}>Event Details</h4>
                        {selectedEvents.map((ev, idx) => (
                            <div key={idx} style={{ marginBottom: '1.2rem' }}>
                                <div style={{ fontWeight: 600, fontSize: '1.08rem', marginBottom: 4 }}>{ev.title}</div>
                                <div style={{ color: '#666', fontSize: '0.98rem', marginBottom: 2 }}>{ev.date}</div>
                                {ev.description && <div style={{ color: '#444', fontSize: '0.97rem' }}>{ev.description}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </aside>
    );
}
