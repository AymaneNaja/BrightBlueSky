'use client'
import React, { useState } from 'react'
import rosegirl1 from '../../../photos/portfolio/Rosegirl1.jpg'
import rosegirl2 from '../../../photos/portfolio/Rosegirl2.jpg'
import rosegirl3 from '../../../photos/portfolio/Rosegirl3.jpg'
import rosegirl4 from '../../../photos/portfolio/Rosegirl4.jpg'
import rosegirl5 from '../../../photos/portfolio/Rosegirl5.jpg'
import rosegirl6 from '../../../photos/portfolio/Rosegirl6.jpg'
import Image from 'next/image'
import HeroImage from './HeroImage'
type Props = {}

function Hero({ }: Props) {
    const [loaded, setLoaded] = useState(false)

    return (
        <div className=' mx-auto w-full xl:w-10/12 lg:w-full md:w-full sm:w-full'>

            <div className='my-20 xl:w-10/12 mx-auto px-4 grid sm:grid justify-center items-center gap-8 sm:gap-8 md:gap-4 lg:gap-4 xl:gap-4  md:flex lg:flex xl:flex '>
                <div className='w-full sm:w-full md:w-2/4 lg:w-2/4 xl:w-2/4 grid mx-auto mb-8'>
                    <h1 className=' w-fit boujee-text bg-clip-text text-transparent font-extrabold text-7xl'>Capture your beautiful memories</h1>
                    <p className='font-semibold text-slate-500 font-logo mt-4 leading-6' >Step into our world of creativity and innovation, where every image tells a story and every moment is cherished. Explore our portfolio to witness the magic of BrightBlueSky Photography and let us be the guardians of your most treasured memories. Welcome to a realm where the sky is always bright, and the possibilities are endless</p>
                </div>
                <div className='w-full xs:mx-2 sm:w-full md:w-2/4 lg:w-2/4 xl:w-2/4 flex justify-center items-center gap-2 mt-3 mx-auto'>
                    {/* image grid 1 */}
                    <div className=' grid gap-2 translate-y-4'>
                        <HeroImage src={rosegirl1.src} />
                        <HeroImage src={rosegirl4.src} />

                    </div>
                    {/* image grid 2 */}
                    <div className=' grid gap-2  -translate-y-12'>
                        <HeroImage src={rosegirl2.src} />
                        <HeroImage src={rosegirl5.src} />


                    </div>
                    {/* image grid 3*/}
                    <div className=' grid gap-2 -translate-y-4 '>
                        <HeroImage src={rosegirl3.src} />
                        <HeroImage src={rosegirl6.src} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero