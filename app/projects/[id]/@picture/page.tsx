'use client'
import React, { useState } from 'react'
import Image from "next/image";
import { useParams } from 'next/navigation';
import { useGetImageByIdQuery } from '@/app/api/redux/PhotosApi';

type Props = {}

const page = (props: Props) => {
    const [loaded, setLoaded] = useState(false)
    const params = useParams()
    const { data, isLoading, isSuccess, isError } = useGetImageByIdQuery(params.id)

    return (
        <div className='bg-black opacity-70 flex h-full w-full justify-center items-center'>
            {isSuccess ? <div >
                {!loaded ?
                    <div className=" bg-slate-300 animate-pulse rounded-lg w-[150px] h-[220px]"></div> : null}
                <Image priority onLoad={(e) => setLoaded(true)} height={600} width={400} className={`py-1 w-full rounded-xl shadow ${!loaded ? 'hidden' : 'block show-content'}`} alt="..." src={data.src} /></div> : null}
        </div>)
}

export default page