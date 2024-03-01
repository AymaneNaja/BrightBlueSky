import React from 'react'
import { MdCamera } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

type Props = {}

const page = (props: Props) => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p
                        className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-sky-500 text-white">
                        Brand new
                    </p>
                </div>
                <h2
                    className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">

                        <svg viewBox="0 0 52 24" fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-slate-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                            <defs>
                                <pattern id="fdca20a0-aeb4-4caf-ba1b-4351eee42363" x="0" y="0" width=".135"
                                    height=".30">
                                    <circle cx="1" cy="1" r=".7"></circle>
                                </pattern>
                            </defs>
                            <rect fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)" width="52" height="24"></rect>
                        </svg>

                        <span className="relative text-5xl boujee-text">The Services We Currently Provide</span>
                    </span>

                </h2>
                <p className="text-base text-gray-700 md:text-lg font-semibold">{`
                    At BrightBlueSky Studio, we don't just provide good studio sessions—we deliver exceptional experiences that leave a lasting impression. Come discover the difference for yourself and let us capture the magic of your moments with style and sophistication.`}
                </p>
            </div>
            <div className="flex justify-center items-center flex-wrap w-full gap-8 sm:gap-8 md:gap-0 lg:gap-0 xl:gap-0">
                <div className="flex flex-col sm:flex-row w-full sm:w-full md:w-2/4 lg:w-2/4 xl:w-2/4  ">
                    <div className="sm:mr-4">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-sky-50">
                            <MdCamera size={30} className='text-blue-500' />
                        </div>
                    </div>
                    <div>
                        <h6 className="mb-2 font-bold leading-5 text-xl text-blue-500">Studio Sessions</h6>
                        <p className="mb-3  text-gray-900 text-wrap w-10/12">{`At BrightBlueSky Studio, our commitment to providing exceptional studio sessions is unwavering. We go above and beyond to ensure you not only leave with beautiful photographs but also with unforgettable memories that you'll cherish for a lifetime.`}
                        </p>
                        <ul className="mb-4 -ml-1 space-y-2">
                            <li className="flex items-start">
                                <span className="mr-1">
                                    <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                        <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                    </svg>
                                </span>
                                State-of-the-Art Equipment
                            </li>
                            <li className="flex items-start">
                                <span className="mr-1">
                                    <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                        <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                    </svg>
                                </span>
                                Professional Guidance
                            </li>
                            <li className="flex items-start">
                                <span className="mr-1">
                                    <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                        <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                    </svg>
                                </span>
                                Personalized Attentiont
                            </li>
                            <li className="flex items-start">
                                <span className="mr-1">
                                    <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                        <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                    </svg>
                                </span>
                                Meticulous Editing
                            </li>
                            <li className="flex items-start">
                                <span className="mr-1">
                                    <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                        <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                    </svg>
                                </span>
                                Transparent Pricing
                            </li>
                        </ul>
                        <p className='text-green-500 font-bold text-xl my-2'>₽4000</p>
                        <a href="/contact" aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800">Contact us
                        </a>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row w-full sm:w-full md:w-2/4 lg:w-2/4 xl:w-2/4 ">
                    <div className="sm:mr-4">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-sky-50">
                            <FaGraduationCap size={30} className='text-blue-500' />
                        </div>
                    </div>
                    <div>
                        <h6 className="mb-2 font-bold leading-5 text-xl text-blue-500">Event Sessions</h6>
                        <p className="mb-3  text-gray-900 text-wrap w-10/12">{`We pride ourselves on our ability to blend seamlessly into the background, allowing you to enjoy your event without interruption. From candid shots to posed portraits, we capture the full spectrum of emotions and interactions, ensuring that no moment goes unnoticed.`}
                        </p>
                        <ul className="mb-4 -ml-1 space-y-2">
                            <li className="flex items-start">
                                <span className="mr-1">
                                    <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                        <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                    </svg>
                                </span>
                                Event Photography
                            </li>
                            <li className="flex items-start">
                                <span className="mr-1">
                                    <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                        <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                    </svg>
                                </span>
                                Event Videography
                            </li>
                            <li className="flex items-start">
                                <span className="mr-1">
                                    <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                        <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                    </svg>
                                </span>
                                Live Streaming
                            </li>
                            <li className="flex items-start">
                                <span className="mr-1">
                                    <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                        <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                    </svg>
                                </span>
                                Customized Packages
                            </li>
                            <li className="flex items-start">
                                <span className="mr-1">
                                    <svg className="w-5 h-5 mt-px text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                                        <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                    </svg>
                                </span>
                                Post-Event Editing and Delivery
                            </li>
                        </ul>
                        <p className='text-green-500 font-bold text-xl my-2'>₽2000</p>
                        <a href="/contact" aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800">Contact us
                        </a>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default page