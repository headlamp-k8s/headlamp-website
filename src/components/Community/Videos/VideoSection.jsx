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
  const groups = React.useMemo(() => {
    const out = { Livestreams: [], Demos: [], Archive: [], others: [] };
    (sorted || []).forEach((v) => {
      const c = v.category || 'others';
      if (c === 'Livestreams') out.Livestreams.push(v);
      else if (c === 'Demos') out.Demos.push(v);
      else if (c === 'Archive') out.Archive.push(v);
      else out.others.push(v);
    });
    return out;
  }, [sorted]);

  const limit = (arr, n) => (showAll ? arr : arr.slice(0, n));

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

      <div className={styles.layout}>
        <main className={styles.main}>
          {groups.Livestreams.length > 0 && (
            <div className={styles.subSection}>
              <h3 className={styles.subHeading}>Live Streams</h3>
              <div className={styles.container}>
                {limit(groups.Livestreams, 4).map((v) => (
                  <VideoCardTile key={v.id} video={v} />
                ))}
              </div>
            </div>
          )}

          {groups.Demos.length > 0 && (
            <div className={styles.subSection}>
              <h3 className={styles.subHeading}>Demos</h3>
              <div className={styles.container}>
                {limit(groups.Demos, 4).map((v) => (
                  <VideoCardTile key={v.id} video={v} />
                ))}
              </div>
            </div>
          )}

          {groups.others.length > 0 && (
            <div className={styles.subSection}>
              <h3 className={styles.subHeading}>Other</h3>
              <div className={styles.container}>
                {limit(groups.others, 4).map((v) => (
                  <VideoCardTile key={v.id} video={v} />
                ))}
              </div>
            </div>
          )}

          {groups.Archive.length > 0 && (
            <div className={styles.subSection}>
              <h3 className={styles.subHeading}>Archive</h3>
              <ul className={styles.list}>
                {limit(groups.Archive, 8).map((v) => (
                  <li key={v.id} className={styles.listItem}>
                    <VideoCardTile variant="list" video={v} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>

        <aside className={styles.sidebar} aria-label="Recent videos">
          <div className={styles.sidebarInner}>
            <h3 className={styles.sidebarHeading}>Recent videos</h3>
            <ul className={styles.sidebarList}>
              {sorted.slice(0, 5).map((v) => (
                <li key={v.id} className={styles.sidebarItem}>
                  <a
                    href={v.link}
                    className={styles.sidebarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.sidebarTitle}>{v.title}</span>
                    <span className={styles.sidebarDate}>{v.date}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
