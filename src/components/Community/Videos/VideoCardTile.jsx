import React from 'react';
import styles from './VideoCardTile.module.css';

/**
 * VideoCardTile renders a single video item (livestream or demo)
 * Props: { video: { id, title, date, link, image, category } }
 */
export default function VideoCardTile({ video }) {
  if (!video) return null;
  const { title, date, link, image, category } = video;
  const alt = `${title} (${category})`;
  return (
    <article className={styles.tile} data-category={category}>
      <a
        href={link}
        className={styles.linkWrap}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.imageWrap} aria-label={alt}>
          {/* Generic red play icon SVG */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            style={{
              display: 'block',
              margin: '0 auto',
              maxWidth: '64px',
              maxHeight: '64px',
            }}
          >
            <circle
              cx="32"
              cy="32"
              r="30"
              fill="#fff"
              stroke="#e53935"
              strokeWidth="4"
            />
            <polygon points="26,20 48,32 26,44" fill="#e53935" />
          </svg>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.footer}>{date}</div>
      </a>
    </article>
  );
}
