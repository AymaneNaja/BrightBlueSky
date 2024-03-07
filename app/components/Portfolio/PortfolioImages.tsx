'use client'
import React, { useState } from "react";
import { useGetAllImagesQuery } from "@/app/api/redux/PhotosApi";
import ImgContainer from "./ImgContainer";
import type { ImageType } from "@/app/projects/page";
export function PortfolioImages({

}) {

    const { data, isSuccess, isLoading, isError } = useGetAllImagesQuery('')
    const picArray = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]
    return <div className=" w-full sm:w-full md:w-11/12 lg:w-10/12 xl:w-10/12 mx-auto">
        <div className="w-full flex justify-center items-center flex-wrap m-2">{isLoading && !isSuccess ? picArray.map(num => { return <div key={num} className=" bg-slate-300 animate-pulse rounded-xl  mx-auto max-[500px]:h-[430px] h-[400px] w-[320px] sm:w-[250px] md:w-[250px] lg:w-[250px] xl:w-[250px] m-2 p-2" /> }) : null}</div>
        <section className="px-3 sm:px-1  md:px-1 xl:px-1  lg:px-1 max-[500px]:gap-1  gap-2 sm:gap-0 md:gap-0 xl:gap-0 lg:gap-0 my-1 grid grid-cols-gallery auto-rows-[10px] w-full">{isSuccess ? data.map((image: ImageType) => {
            return (
                <ImgContainer key={image.id} photo={image} />
            )
        }) : null}</section>

    </div>;
}
