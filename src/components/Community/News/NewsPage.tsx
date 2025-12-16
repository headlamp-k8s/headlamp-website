import React from 'react';
import ComTopBar from '../Navigation/ComTopBar'
import Layout from "@theme/Layout";
import DemoContent from './DemoContent';


export default function NewsPage() {
    // ...existing code...
    // Import AnnouncementsBulletin
    // Place DemoContent on the left, AnnouncementsBulletin on the right
    // Use flex for layout
    const AnnouncementsBulletin = require('./AnnouncementsBulletin').default;
    return (
        <>
            <ComTopBar />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '2.2rem', marginTop: '1.2rem' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                    <DemoContent />
                </div>
                <div style={{ minWidth: 320, maxWidth: 340, marginRight: '2.5rem', marginTop: '2.5rem' }}>
                    <AnnouncementsBulletin />
                </div>
            </div>
        </>
    )
}