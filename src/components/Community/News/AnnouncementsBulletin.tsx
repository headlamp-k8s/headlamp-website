import React from 'react';
import { demoAnnouncements } from '../Data/Announcements/DemoAnnouncements.js';

function parseDisplayDate(d: string): number {
  const cleaned = d.replace(/(\d+)(st|nd|rd|th)/, '$1');
  const parsed = Date.parse(cleaned);
  return isNaN(parsed) ? 0 : parsed;
}

export default function AnnouncementsBulletin() {
  const sorted = [...demoAnnouncements].sort((a, b) => parseDisplayDate(b.date) - parseDisplayDate(a.date));
  const recent = sorted.slice(0, 4);
  return (
    <aside style={{
      background: 'var(--ifm-card-background-color, #fff)',
      border: '1.5px solid var(--ifm-color-primary, #1976d2)',
      borderRadius: 10,
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
      padding: '1.1rem 1rem 1rem',
      marginLeft: '1.2rem',
      marginBottom: '2rem',
      minWidth: 0,
      maxWidth: 320,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    }} aria-label="Recent Announcements Bulletin">
      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--ifm-color-primary)', textAlign: 'center' }}>Recent Announcements</h3>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
        {recent.map(a => (
          <li
            key={a.id}
            style={{
              background: 'var(--ifm-background-surface-color, #faf9f6)',
              borderRadius: 6,
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              padding: '0.55rem 0.6rem 0.5rem',
              border: '1.5px solid var(--ifm-toc-border-color, #e0e0e0)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'box-shadow 0.18s ease, transform 0.18s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLLIElement).style.boxShadow = '0 6px 20px rgba(25,118,210,0.12)';
              (e.currentTarget as HTMLLIElement).style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLLIElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
              (e.currentTarget as HTMLLIElement).style.transform = 'none';
            }}
          >
            <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.2rem', color: 'var(--ifm-font-color-base)' }}>{a.title}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: '0.3rem' }}>{a.date}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-800)' }}>{a.description}</div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
