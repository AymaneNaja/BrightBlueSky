import { PortfolioImages } from '../components/Portfolio/PortfolioImages';
import React from 'react'


export type ImageType = {
    id: string,
    created_at: Date,
    src: string,
    title: string
}
const portfolio_description = `we specialize in capturing the essence of people through stunning portrait photography. Our portfolio showcases a diverse range of individuals, each beautifully depicted against the backdrop of a bright blue sky. With meticulous attention to detail and a keen eye for composition, we strive to convey the unique personality and emotion of each subject.`

function page({ }: any) {


    return (
        <div className='mx-auto w-full  mt-10 bg-white'>
            <div className={'mx-auto w-full xl:w-10/12 lg:w-full md:w-full sm:w-full px'}>
                <h1 className='text-5xl boujee-text font-extrabold text-center py-2 font-logo underline  '>Here Are Some of My Projects</h1>
                <p className={`text-slate-500 font-bold text-center w-10/12 tracking-wide leading-relaxed mx-auto  py-4 `}>{portfolio_description}</p>

            </div>
            <PortfolioImages />
        </div>

    )
}

export default page