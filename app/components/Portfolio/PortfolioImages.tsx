'use client'
import React, { useState } from "react";
import { useGetAllImagesQuery } from "@/app/api/redux/PhotosApi";
import Image from "next/image";
import ImgContainer from "./ImgContainer";
import Link from 'next/link';
type ImageType = {
    id: string,
    created_at: Date,
    link: string,
    Width: number,
    Height: number,
    title: string
}
export function PortfolioImages({

}) {

    const { data, isSuccess, isLoading, isError } = useGetAllImagesQuery('')
    const [loaded, setLoaded] = useState(false)
    const picArray = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]
    return <div className=" w-full sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12 mx-auto  gap-1 sm:gap-2 md:gap-2 lg:gap-1 xl:gap-4 columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 mt-10  ">
        <div className="w-full flex justify-center items-center flex-wrap gap-3 ">{isLoading && !isSuccess ? picArray.map(num => { return <div key={num} className=" bg-slate-300 animate-pulse rounded-xl w-11/12 sm:w-10/12 md:w-full lg:w-full xl:w-full h-[420px] my-1 sm:h-[400px] md:h-[400px] lg:h-[400px] xl:h-[400px]  p-2" /> }) : null}</div>
        {isSuccess ? data.map((image: ImageType) => {
            return (
                <section key={image.id} className="px-1 my-3 grid grid-cols-gallery  gap-1 sm:gap-0 md:gap-0 lg:gap-0 xl:gap-0 auto-rows-[10px]">
                    <ImgContainer key={image.id} link={image.link} photo={image} />
                </section>)

        }) : null}

    </div>;
}
