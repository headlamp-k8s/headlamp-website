import React from 'react';
import styles from './VideoSection.module.css';
import VideoCardTile from './VideoCardTile.jsx';

// Helper: parse ordinal dates like "Nov 18th 2025" for sorting
function parseDisplayDate(d) {
  const cleaned = d.replace(/(\d+)(st|nd|rd|th)/, '$1');
  const parsed = Date.parse(cleaned);
  return isNaN(parsed) ? 0 : parsed;
}

/**
 * VideoSection reusable list of video cards.
 * Props:
 *  - title: section heading (e.g., "Livestreams", "Demos", "Archive")
 *  - videos: array of video objects { id, title, date, link, image, category }
 *  - showAll (optional): if true, render all videos; otherwise show latest 4.
 */
export default function VideoSection({ title, videos, showAll = false }) {
  const sorted = React.useMemo(() => {
    return [...(videos || [])].sort(
      (a, b) => parseDisplayDate(b.date) - parseDisplayDate(a.date)
    );
  }, [videos]);

  const visible = showAll ? sorted : sorted.slice(0, 4);

  return (
    <section
      className={styles.section}
      aria-labelledby={`videos-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className={styles.headerRow}>
        <h2
          id={`videos-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className={styles.heading}
        >
          {title}
        </h2>
      </div>
      <div className={styles.grid}>
        {visible.map((v) => (
          <VideoCardTile key={v.id} video={v} />
        ))}
      </div>
      <div className={styles.footerRow}>
        <button
          type="button"
          className={styles.moreBtn}
          aria-label={`Show more ${title} videos (coming soon)`}
          disabled
        >
          More &gt;
        </button>
      </div>
    </section>
  );
}
