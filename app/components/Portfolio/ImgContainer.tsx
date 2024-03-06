'use client'
import type { Photo } from "../../../Models/Images"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


export default function ImgContainer({ photo, link }: any) {
    const widthHeightRatio = photo.Height / photo.Width
    const galleryHeight = Math.ceil(250 * widthHeightRatio)
    const photoSpans = Math.ceil(galleryHeight / 10) + 1
    const [loaded, setLoaded] = useState(false)
    return (
        <div className="w-full sm:w-[250px] md:w-[250px] lg:w-[250px] xl:w-[250px] justify-self-center "
            style={{ gridRow: `span ${photoSpans}` }}
        >
            <Link href={link} target="_blank" className="grid place-content-center">
                <div className="rounded-xl hover:opacity-70 scale-100
                sm:scale-95 md:scale-90 lg:scale-90 xl:scale-90  transition-all  overflow-hidden group  ">
                    {!loaded ?
                        <div style={{ height: photo.Height, width: photo.Width }} className={` bg-slate-300 animate-pulse rounded-xl  my-1 sm:  max-h-[385px] `}></div> : null}
                    <Image
                        src={photo.link}
                        alt={'...'}
                        width={photo.Width}
                        height={photo.Height}
                        sizes="250px"
                        className={`group-hover:opacity-75 show-content  `}
                        onLoad={(e) => setLoaded(true)}
                    />
                </div>
            </Link>
        </div>
    )
}