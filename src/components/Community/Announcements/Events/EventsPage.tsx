import React from 'react';
import ComTopBar from '../../Navigation/ComTopBar';
import ComSideBar from '../../Navigation/ComSidebar';
import EventList from './EventList';

export default function EventsPage() {
    return (
        <>
            <ComTopBar />
            <div style={{ display: 'flex' }}>
                <ComSideBar
                    tabs={[
                        { title: 'Announcements', link: '/announcements' },
                        { title: 'Events', link: '/events' },
                    ]}
                />
                <EventList />
            </div>
        </>
    );
}
