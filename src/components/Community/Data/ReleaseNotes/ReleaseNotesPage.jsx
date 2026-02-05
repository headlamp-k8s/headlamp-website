import React from 'react';
import ComTopBar from '../Navigation/ComTopBar';
import ComSideBar from '../Navigation/ComSidebar';
import ReleaseNotesList from './ReleaseNotesList';

export default function ReleaseNotesPage() {
  return (
    <>
      <ComTopBar />
      <div style={{ display: 'flex' }}>
        <ComSideBar
          tabs={[
            { title: 'Release Notes 2025', link: '/releasenotes2025' },
            { title: 'Release Notes 2024', link: '/releasenotes2024' },
          ]}
        />
        <ReleaseNotesList />
      </div>
    </>
  );
}
