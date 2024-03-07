import { ImageOverlayOptions } from "leaflet"
import Image from "next/image"
import Link from "next/link"

type ImageType = {
    id: string,
    created_at: Date,
    src: string,
    width: number,
    height: number,
    title: string
}
export default function ImgContainer({ photo }: any) {

    const widthHeightRatio = photo.height / photo.width
    const galleryHeight = Math.ceil(250 * widthHeightRatio)
    const photoSpans = Math.ceil(galleryHeight / 10) + 1

    return (
        <div className="w-10/12 sm:w-[250px] justify-self-center"
            style={{ gridRow: `span ${photoSpans}` }}
        >
            <Link href={photo.src} target="_blank" className="grid place-content-center">
                <div className="rounded-xl overflow-hidden group">
                    <Image
                        src={photo.src}
                        alt={'...'}
                        width={photo.width}
                        height={photo.height}
                        sizes="(max-width:624px)400px,250px"
                        className="group-hover:opacity-75 show-content"
                    />
                </div>
            </Link>
        </div>
    )
}