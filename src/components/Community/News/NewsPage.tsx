import React from 'react';
import ComTopBar from '../Navigation/ComTopBar'
import Layout from "@theme/Layout";
import DemoContent from './DemoContent';


export default function NewsPage() {
    return (
        <>
            <ComTopBar />
            <div>
                <DemoContent />
                {/* NEWS CONTENT */}
            </div>
        </>
    )
}