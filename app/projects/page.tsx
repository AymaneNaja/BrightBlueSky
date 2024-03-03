'use client'
import React from 'react'
import { headers } from 'next/headers'
import Test from '../components/test/Test'
import { useGetAllImagesQuery } from '../api/redux/PhotosApi'

type ImageType = {
    id: string,
    created_at: Date,
    src: string,
    title: string
}
function page({ }: any) {


    return (
        <div className='mx-auto w-full xl:w-10/12 lg:w-full md:w-full sm:w-full px-4 mt-10'>
            <h1 className='text-5xl boujee-text font-extrabold text-center py-2 font-logo underline '>Here Are Some of My Projects</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 ">
                <div className="grid gap-4">

                </div>
            </div>

        </div>
    )
}

export default page