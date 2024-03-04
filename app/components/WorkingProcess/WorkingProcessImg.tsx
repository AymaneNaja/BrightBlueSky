'use client'
import React, { useState } from 'react'
import Image from 'next/image'
type Props = {
    styling: string,
    image: {
        src: string
    }
}

function WorkingProcessImg({ image, styling }: Props) {
    const [loaded, setLoaded] = useState(false)

    return (
        <>
            <div style={{ backgroundImage: `url(${image.src})` }} className={`${styling} ${!loaded ? 'hidden' : 'block show-content'}`} />
            <Image alt={'...'} onLoad={(e) => setLoaded(true)}
                className={`hidden`} height={300} width={150} src={image.src}></Image>
            {!loaded ?
                <div className={` bg-slate-300 animate-pulse rounded-lg ${styling}`}></div> : null}
        </>
    )
}

export default WorkingProcessImg