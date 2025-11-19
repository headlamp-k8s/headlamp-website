import React from 'react';
import styles from './VideoCardTile.module.css';

/**
 * VideoCardTile renders a single video item (livestream or demo)
 * Props: { video: { id, title, date, link, image, category } }
 */
const CATEGORY_STYLES = {
  Livestreams: { background: '#e3f2fd', color: '#0d47a1' },
  Demos: { background: '#e8f5e9', color: '#1b5e20' },
  Archive: { background: '#f3e5f5', color: '#4a148c' },
  Tutorials: { background: '#fff3e0', color: '#e65100' },
  default: { background: '#eceff1', color: '#263238' },
};

export default function VideoCardTile({ video, variant = 'card' }) {
  if (!video) return null;
  const { title, date, link, image, category } = video;
  const alt = `${title} (${category})`;
  const catStyle = CATEGORY_STYLES[category] || CATEGORY_STYLES.default;

  return (
    <article
      className={`${styles.tile} ${variant === 'list' ? styles.list : ''}`}
      data-category={category}
    >
      <a
        href={link}
        className={styles.linkWrap}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={`${styles.imageWrap} ${
            variant === 'list' ? styles.imageWrapList : ''
          }`}
          aria-label={alt}
        >
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
        <div className={styles.content}>
          <div
            className={styles.category}
            style={{ background: catStyle.background, color: catStyle.color }}
          >
            {category}
          </div>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.footer}>{date}</div>
        </div>
      </a>
    </article>
  );
}
