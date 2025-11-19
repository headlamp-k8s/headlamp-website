import React from 'react';
import VideoSection from './VideoSection.jsx';
import { demoVideoData } from '../Data/Videos/DemoVideoData.js';
import ComTopBar from '../Navigation/ComTopBar.jsx';

function parseDisplayDate(d) {
    const cleaned = d.replace(/(\d+)(st|nd|rd|th)/, '$1');
    const parsed = Date.parse(cleaned);
    return isNaN(parsed) ? 0 : parsed;
}

export default function VideosPage() {
    const livestreams = React.useMemo(() => demoVideoData.filter(v => v.category === 'livestream'), []);
    const demos = React.useMemo(() => demoVideoData.filter(v => v.category === 'demo'), []);
    // Archive = all videos sorted by date desc
    const archive = React.useMemo(() => [...demoVideoData].sort((a, b) => parseDisplayDate(b.date) - parseDisplayDate(a.date)), []);

    return (
        <div>
            <ComTopBar />
            <VideoSection title="Live Streams" videos={livestreams} />
            <VideoSection title="Demos" videos={demos} />
            <VideoSection title="Archive" videos={archive} showAll />
        </div>
    );
}

