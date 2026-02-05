import React from 'react';
import ComTopBar from '../../Navigation/ComTopBar';
import ComSideBar from '../../Navigation/ComSidebar';
import EventList from './EventList';
import PastEventsList from './PastEventsList';
import DemoCal from './DemoCal';

export default function EventsPage() {
    return (
        <>
            <ComTopBar />
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2.5rem' }}>
                <ComSideBar
                    tabs={[
                        { title: 'Announcements', link: '/announcements' },
                        { title: 'Events', link: '/events' },
                    ]}
                />
                <DemoCal style={{ marginTop: '2.5rem' }} />
                <div>
                    <EventList />
                </div>
            </div>
            <div style={{ width: '100%', marginTop: '2rem' }}>
                {/* <PastEventsList /> */}
            </div>
        </>
    );
}
