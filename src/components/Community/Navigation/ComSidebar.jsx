import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from '@docusaurus/router';
import comStyles from './styles.module.css';

// Left-aligned, reusable community sidebar with active-state logic
export default function ComSideBar({
  tabs,
  exact = true,
  ariaLabel = 'Community navigation sidebar',
}) {
  const { pathname } = useLocation();

  const items = React.useMemo(() => {
    const normalize = (p) => {
      if (!p) return '/';
      // strip query/hash, trim trailing slash except root
      const base = p.replace(/[?#].*$/, '');
      return base.length > 1 ? base.replace(/\/+$/, '') : base;
    };
    const path = normalize(pathname);

    const normalizedTabs = tabs.map((t) => ({ ...t, link: normalize(t.link) }));

    // First, try exact match
    let activeIndex = -1;
    if (exact) {
      activeIndex = normalizedTabs.findIndex((t) => t.link === path);
    }

    // If no exact match (or exact=false), pick the best prefix match on segment boundary
    if (activeIndex === -1) {
      const score = (link) => {
        if (link === '/') return path === '/' ? 1 : 0;
        const boundary = path === link || path.startsWith(link + '/');
        return boundary ? link.length : 0;
      };
      let best = 0;
      normalizedTabs.forEach((t, i) => {
        const s = score(t.link);
        if (s > best) {
          best = s;
          activeIndex = i;
        }
      });
    }

    return normalizedTabs.map((t, i) => ({ ...t, current: i === activeIndex }));
  }, [tabs, pathname, exact]);

  return (
    <aside
      className={comStyles.communitySidebarContainer}
      aria-label={ariaLabel}
    >
      <nav
        className={comStyles.communitySidebar}
        role="navigation"
        aria-label={ariaLabel}
      >
        <ul className={comStyles.communitySidebar}>
          {items.map((item) => (
            <li
              key={item.link}
              className={
                item.current
                  ? comStyles.communitySidebarItemActive
                  : comStyles.communitySidebarItem
              }
            >
              <a
                href={item.link}
                className={[
                  comStyles.communitySidebarLink,
                  item.current ? comStyles.communitySidebarLinkActive : null,
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

ComSideBar.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  exact: PropTypes.bool,
  ariaLabel: PropTypes.string,
};
