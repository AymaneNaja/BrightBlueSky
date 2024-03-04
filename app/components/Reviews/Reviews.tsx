import React from 'react'
import ServiceCard from './ServiceCard'

type Props = {}

const Reviews = (props: Props) => {
    return (
        <section className=" my-20  mx-auto w-full xl:w-10/12 lg:w-full md:w-full sm:w-full bg-white">
            <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                <h1 className="text-4xl font-bold py-1 text-center boujee-text">What our customers are saying about our studio.</h1>
            </div>
            <div className="container mx-auto gap-8 flex flex-col justify-center items-center w-full sm:w-full md:w-10/12 lg:w-9/12 xl:w-7/12 transition-all">
                <div className="flex flex-col items-center mx-12 lg:mx-0">
                    <div className="relative text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 text-gray-700">
                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        <p className="px-8 py-1 text-lg italic">{"John's Studio brought my vision to life with their expertise! From the initial consultation to the final prints, every step was seamless. The team's creativity and attention to detail made for an unforgettable experience. Highly recommended for anyone looking for stunning photography!."}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 text-gray-700">
                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </div>
                    <span className="w-12 h-1 my-2 rounded-lg boujee-bg"></span>
                    <p>Samantha Jenkins</p>
                </div>
                <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                    <div className="relative text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 text-gray-700">
                            <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        <p className="px-8 py-1 text-lg italic">{"Absolutely thrilled with BrightBlueSky Studio! Their talent behind the lens is truly remarkable. The photos from our session were beyond stunning, capturing the magic of the moment perfectly. Professional, friendly, and exceptionally skilled—couldn't have asked for more!"}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 text-gray-700">
                            <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </div>
                    <span className="w-12 h-1 my-2 rounded-lg boujee-bg"></span>
                    <p>Victoria Kgomotso</p>
                </div>
            </div>
        </section>
    )
}

export default Reviews