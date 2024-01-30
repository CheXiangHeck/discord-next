"use client";

import React from 'react';
import './Loading.css';
import { useEffect } from 'react';
import { useSearchParams, redirect, useRouter } from 'next/navigation';

export default function Page() {

    const data = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const search = data.get('serverId');
        const timeout = setTimeout(() => {
            router.push(`servers/${search}`);
        }, 5000);

        return () => clearTimeout(timeout);
    });

    return(
        <>
            <div className="Loading-Screen font-SixtyFour">
                <div className="Loading-Center">
                <img src="DiscordHmm.png" className="Loading-ImageSize"></img>
                <h1>Fake Discord</h1>
                <div className="Loading">
                    <h1>Loading</h1>
                    <h1>...</h1>
                </div>
                <p>Creator: CheHeck.<br/> Trying to  recreate a discord.</p>
                </div>
            </div>
        </>
    )
}