'use client'
import React, { useState } from 'react';
import John from '../../../photos/john/WhatsApp Image 2024-02-26 at 14.05.59_e1319187.jpg';
import Image from 'next/image';
type Props = {}

function Biography({ }: Props) {
    const [showMore, setShowMore] = useState(false)
    const [loaded, setLoaded] = useState(false)

    return (
        <section className='bg-sky-50'>
            <div className='mx-auto w-full xl:w-10/12 lg:w-full md:w-full sm:w-full '>
                <div className={' w-full flex justify-center items-center my-10 mx-auto gap-4 px-4 xl:w-10/12 sm:w-full md:w-full lg:w-full  py-10  transition-all'} >
                    <div className='w-2/4 xl:w-1/4 h-fit mx-auto relative flex flex-col justify-center items-center '>
                        <div className='w-full'>
                            {!loaded ?
                                <div className={`bg-slate-400 animate-pulse rounded-lg xs:w-9/12 w-11/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-full mx-auto min-h-80 h-full `}></div> : null}
                            <Image priority alt={'...'} onLoad={(e) => setLoaded(true)} width={500} height={500} src={John.src} className={`rounded-lg shadow w-11/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-full mx-auto ${!loaded ? 'hidden' : 'block show-content'} `} />
                        </div>
                        <div className=' w-11/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-9/12  text-center  absolute -bottom-6    '>
                            <p className='w-10/12 mx-auto boujee-bg text-white text-lg md:text-xl lg:text-xl xl:text-xl sm:text-lg font-extrabold shadow rounded py-2 px-6'>Wambua John Mutua</p>
                        </div>
                    </div>
                    <div className=' flex flex-col justify-start items-start gap-2 w-2/4 mx-auto  '>
                        <h1 className='text-5xl font-bold boujee-text font-sans '>A Little Bit About Me...</h1>
                        <p className={`${showMore ? 'line-clamp-none' : 'line-clamp-6'} transition-all font-semibold   text-slate-500 w-fit`}>
                            {`
Hello there, I'm John, a 25-year-old photographer with an insatiable passion for capturing life's fleeting moments. Ever since I can remember, I've been enchanted by the magic of photography – the way it freezes time, preserves memories, and allows us to relive precious moments again and again.

Growing up, I was always the one with a camera in hand, eager to document every adventure, every smile, and every sunset. As I delved deeper into the world of photography, I realized that it wasn't just a hobby for me – it was a calling, a way to express myself and connect with the world around me in ways I never thought possible.

Fuelled by my passion, I decided to pursue my dreams and turn my love for photography into a career. I immersed myself in the art, learning everything I could about composition, lighting, and storytelling, constantly striving to refine my craft and push the boundaries of my creativity.

Now, at 25, I'm proud to say that I've built a life doing what I love. From intimate portraits to breathtaking landscapes, I've had the privilege of capturing a wide range of subjects through my lens, each one telling its own unique story.

`}
                        </p><button onClick={() => setShowMore(!showMore)} className='text-blue-500 font-semibold hover:bg-text-700 transition-all'>{!showMore ? 'show more' : 'show less '}</button>
                    </div>
                </div>
            </div></section>
    )
}

export default Biography