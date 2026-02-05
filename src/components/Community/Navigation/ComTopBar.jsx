import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from '@docusaurus/router';
import comStyles from './styles.module.css';

// Note: Be sure to add the new page to the src/pages folder as well
const contentTabs = [
  { title: 'News', link: '/community', current: null },
  { title: 'Blogs', link: '/blog', current: null },
  { title: 'Announcements', link: '/announcements', current: null },
  { title: 'Videos', link: '/videos', current: null },
  { title: 'Release Notes', link: '/releasenotes', current: null },
];

export default function ComTopBar() {
  // If each title is a object with both a title and a link property
  const location = useLocation();
  console.log('Current path: ', location.pathname);
  const path = location.pathname;
  const [currentTabs, setCurrentTabs] = React.useState();

  const tabs = React.useMemo(
    () =>
      contentTabs.map((t) => ({
        ...t,
        current: path === t.link ? true : false,
      })),
    [path]
  );

  console.log('Current Tab: ', currentTabs);

  return (
    <>
      <div className={comStyles.communityTopbarContainer}>
        <div className={comStyles.communityTopBar}>
          {tabs.map((tab) => {
            return (
              <div
                className={
                  tab.current
                    ? comStyles.communityTopbarItemActive
                    : comStyles.communityTopbarItem
                }
                key={tab.title}
              >
                <a href={tab.link} className={comStyles.communityTopbarLink}>
                  {tab.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
