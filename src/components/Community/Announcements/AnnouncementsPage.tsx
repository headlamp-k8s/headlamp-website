import React from 'react';
import ComTopBar from '../Navigation/ComTopBar'
import Layout from "@theme/Layout";
import PostList from './PostList';
import ComSideBar from '../Navigation/ComSidebar';






export default function AnnouncementsPage() {
    return (
        <>
            <ComTopBar />
            <div style={{ display: 'flex' }}>
                <ComSideBar tabs={[
                    { title: 'Announcements', link: '/announcements' },
                    { title: 'Events', link: '/events' },
                ]} />
                <PostList />
            </div>
        </>
    )
}