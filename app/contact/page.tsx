'use client'
import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { TileLayer, Marker, MapContainer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
type Props = {}


const position: LatLngExpression = [46.358803, 48.059937]

function page({ }: Props) {

    return (
        <div className='relative w-full min-h-[70rem] my-auto mx-auto '>
            <img src='https://shuffle.dev/saturn-assets/images/contact/light-left-blue.png' alt="..." className='absolute top-0 left-0 z-0'></img>
            <div className='mt-12  mx-auto w-full xl:w-8/12 lg:w-9/12 md:w-10/12 sm:w-full  z-10  flex flex-col justify-center items-center m-6'>
                <aside className='mb-6 z-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={300}
                        height={200} viewBox="0 0 3448.103660698048 1254.6902499545322">

                        <g transform="scale(22.40518303490236) translate(10, 10)">
                            <defs id="SvgjsDefs2831"></defs><g id="SvgjsG2832" transform="matrix(1.9007391227505699,0,0,1.9007391227505699,-1.1404437455532546,-2.014780868911074)" fill="#0450ca"><path d="M5.38 6.52 q0 1.18 -0.21 1.92 t-0.79 1.62 q1 0.52 1 2.06 l0 5.58 q0 2.3 -2.24 2.3 l-2.54 0 l0 -18.68 l2.54 0 q2.24 0 2.24 2.32 l0 2.88 z M2.98 18.34 q0.44 0 0.59 -0.23 t0.15 -0.63 l0 -5.14 q0 -0.32 -0.08 -0.52 t-0.3 -0.28 q-0.66 0.94 -0.87 1.51 t-0.21 1.49 l0 3.8 l0.72 0 z M3.72 3.84 q0 -0.4 -0.15 -0.63 t-0.59 -0.23 l-0.72 0 l0 7.2 l0.16 -0.22 q0.8 -1.1 1.05 -1.69 t0.25 -1.51 l0 -2.92 z M11.36 20 l-1.64 0 l-0.02 -5.72 q0 -0.72 -0.14 -1.21 t-0.54 -1.09 q-0.46 0.7 -0.62 1.22 t-0.16 1.34 l0 5.46 l-1.66 0 l0 -18.68 l2.54 0 q2.24 0 2.24 2.32 l0 2.88 q0 1.32 -0.26 2.1 t-1.04 1.9 q0.76 1.08 1.03 1.85 t0.27 2.03 l0 5.6 z M9.700000000000001 3.84 q0 -0.4 -0.15 -0.63 t-0.57 -0.23 l-0.74 0 l0 7.2 q0.06 -0.06 0.09 -0.12 t0.07 -0.1 q0.8 -1.1 1.05 -1.69 t0.25 -1.51 l0 -2.92 z M14.22 1.3200000000000003 l0 18.68 l-1.66 0 l0 -18.68 l1.66 0 z M20.2 17.7 q0 2.3 -2.24 2.3 l-0.3 0 q-1.2 0 -1.72 -0.61 t-0.52 -1.69 l0 -14.34 q0 -1.1 0.52 -1.7 t1.72 -0.6 l0.3 0 q1.2 0 1.72 0.6 t0.52 1.7 l0 4.7 l-1.66 0 l0 -4.48 q0 -0.4 -0.15 -0.63 t-0.59 -0.23 q-0.42 0 -0.57 0.23 t-0.15 0.63 l0 13.9 q0 0.4 0.15 0.63 t0.57 0.23 q0.44 0 0.59 -0.23 t0.15 -0.63 l0 -4.48 l-0.72 0 l0 -1.66 l2.38 0 l0 6.36 z M21.400000000000002 1.3200000000000003 l0 18.68 l1.64 0 l0.02 -5.58 q0 -0.92 0.25 -1.51 t1.05 -1.69 l0.16 -0.22 l0 9 l1.66 0 l0 -18.68 l-1.66 0 l0 5.34 q0 0.96 -0.24 1.56 t-1.04 1.7 q-0.18 0.24 -0.2 0.26 l0 -8.86 l-1.64 0 z M32.18 2.9800000000000004 l-1.56 0 l0 17.02 l-1.66 0 l0 -17.02 l-1.56 0 l0 -1.66 l4.78 0 l0 1.66 z"></path></g><g id="SvgjsG2833" transform="matrix(1.900739314164109,0,0,1.900739314164109,61.859556139598595,-2.0147846971816956)" fill="#3889ec"><path d="M5.38 6.52 q0 1.18 -0.21 1.92 t-0.79 1.62 q1 0.52 1 2.06 l0 5.58 q0 2.3 -2.24 2.3 l-2.54 0 l0 -18.68 l2.54 0 q2.24 0 2.24 2.32 l0 2.88 z M2.98 18.34 q0.44 0 0.59 -0.23 t0.15 -0.63 l0 -5.14 q0 -0.32 -0.08 -0.52 t-0.3 -0.28 q-0.66 0.94 -0.87 1.51 t-0.21 1.49 l0 3.8 l0.72 0 z M3.72 3.84 q0 -0.4 -0.15 -0.63 t-0.59 -0.23 l-0.72 0 l0 7.2 l0.16 -0.22 q0.8 -1.1 1.05 -1.69 t0.25 -1.51 l0 -2.92 z M8.24 1.3200000000000003 l0 17 l1.46 0 l0 1.68 l-3.12 0 l0 -18.68 l1.66 0 z M15.68 1.3200000000000003 l0 16.38 q0 2.3 -2.24 2.3 l-0.3 0 q-1.2 0 -1.72 -0.61 t-0.52 -1.69 l0 -16.38 l1.66 0 l0 16.16 q0 0.4 0.15 0.63 t0.57 0.23 t0.58 -0.23 t0.16 -0.63 l0 -16.16 l1.66 0 z M18.54 3 l0 6.82 l1.48 0 l0 1.68 l-1.48 0 l0 6.82 l1.48 0 l0 1.68 l-3.14 0 l0 -18.68 l3.14 0 l0 1.68 l-1.48 0 z M23.12 8.22 q0.24 0.6 1.04 1.7 q0.8 1.12 1.16 1.74 t0.52 1.29 t0.16 1.71 l0 3.04 q0 2.3 -2.24 2.3 l-0.3 0 q-1.2 0 -1.72 -0.61 t-0.52 -1.69 l0 -4.66 l1.66 0 l0 4.44 q0 0.4 0.15 0.63 t0.57 0.23 t0.58 -0.23 t0.16 -0.63 l0 -3.06 q0 -0.92 -0.25 -1.5 t-1.05 -1.7 q-0.8 -1.1 -1.16 -1.74 t-0.51 -1.32 t-0.15 -1.72 l0 -3.08 q0 -1.1 0.52 -1.7 t1.72 -0.6 l0.3 0 q2.24 0 2.24 2.3 l0 4.7 l-1.66 0 l0 -4.48 q0 -0.4 -0.16 -0.63 t-0.58 -0.23 t-0.57 0.23 t-0.15 0.63 l0 3.08 q0 0.96 0.24 1.56 z M31.720000000000002 12.42 q0.26 0.78 0.26 2.1 l0 5.48 l-1.64 0 l-0.02 -5.72 q0 -0.72 -0.14 -1.21 t-0.54 -1.09 q-0.46 0.7 -0.62 1.22 t-0.16 1.34 l0 5.46 l-1.66 0 l0 -18.68 l1.66 0 l0 8.86 q1.46 -1.62 1.46 -3.42 l0.02 -5.44 l1.64 0 l0 5.2 q0 1.32 -0.26 2.1 t-1.04 1.9 q0.78 1.12 1.04 1.9 z M37.9 1.3200000000000003 l0 18.68 l-1.66 0 l0 -5.6 q0 -0.88 -0.25 -1.47 t-1.05 -1.69 t-1.16 -1.74 t-0.51 -1.32 t-0.15 -1.72 l0 -5.14 l1.66 0 l0 5.34 q0 0.96 0.24 1.57 t1.04 1.71 l0.18 0.26 l0 -8.88 l1.66 0 z"></path></g>
                        </g>
                    </svg>
                </aside>
                <h1 className='text-5xl font-extrabold boujee-text z-10   last:text-red-500  font-sans'>Get in touch with us</h1>
                <p className='font-italic text-slate-500 text-xl w-8/12  z-10 text-center py-4 font-semibold'>{`we're all ears and lenses! Let's turn your wildest photography dreams into vibrant realities. Get in touch today and let the fun begin!`}</p>
                <section className='grid  grid-cols-2 mb-16 gap-4  z-10 translate-x-8'>
                    {/* email */}
                    <div className='flex gap-3 justify-start items-center  w-fit p-2'>
                        <i className='bg-rose-500 text-white rounded-full p-3'><MdEmail size={25} /></i>
                        <span>
                            <h3 className='text-lg text-slate-400 font-semibold'>Email</h3>
                            <p className='font-bold '>j.mutua7890@gmail.com </p>
                        </span>
                    </div>
                    {/* phone number */}
                    <div className='flex gap-3 justify-start items-center  p-2 w-fit'>
                        <i className='bg-emerald-500 text-white rounded-full p-3'><FaPhone size={25} /></i>
                        <span>
                            <h3 className='text-lg text-slate-400 font-semibold'>Phone number</h3>
                            <p className='font-bold '>+79911171674</p>
                        </span>
                    </div>
                    {/* location */}
                    {/* telegram */}
                    <div className='flex gap-3 justify-start items-center p-2 w-fit '>
                        <i className=' text-white rounded-full   w-[50px] h-[50px]   '><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="telegram"><circle cx="12" cy="12" r="12" fill="#039be5"></circle><path fill="#fff" d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"></path></svg></i>
                        <span>
                            <h3 className='text-lg text-slate-400 font-semibold'>Telegram</h3>
                            <p className='font-bold '>@brightblusky17</p>
                        </span>
                    </div>
                    {/* instagram */}
                    <div className='flex gap-3 justify-start items-center p-2 w-fit'>
                        <i className=' text-white rounded-full   w-[50px] h-[50px]   '><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" data-name="Layer 1" viewBox="0 0 128 128" id="instagram"><defs><clipPath id="b"><circle cx="64" cy="64" r="64" fill="none"></circle></clipPath><clipPath id="c"><path fill="none" d="M104-163H24a24.07 24.07 0 0 0-24 24v80a24.07 24.07 0 0 0 24 24h80a24.07 24.07 0 0 0 24-24v-80a24.07 24.07 0 0 0-24-24Zm16 104a16 16 0 0 1-16 16H24A16 16 0 0 1 8-59v-80a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16Z"></path></clipPath><clipPath id="e"><circle cx="82" cy="209" r="5" fill="none"></circle></clipPath><clipPath id="g"><path fill="none" d="M64-115a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16Zm0 24a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8Z"></path></clipPath><clipPath id="h"><path fill="none" d="M84-63H44a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v40a16 16 0 0 1-16 16Zm-40-64a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8Z"></path></clipPath><clipPath id="i"><circle cx="82" cy="-117" r="5" fill="none"></circle></clipPath><radialGradient id="a" cx="27.5" cy="121.5" r="137.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffd676"></stop><stop offset=".25" stop-color="#f2a454"></stop><stop offset=".38" stop-color="#f05c3c"></stop><stop offset=".7" stop-color="#c22f86"></stop><stop offset=".96" stop-color="#6666ad"></stop><stop offset=".99" stop-color="#5c6cb2"></stop></radialGradient><radialGradient id="d" cx="27.5" cy="-41.5" r="148.5" xlinkHref="#a"></radialGradient><radialGradient id="f" cx="13.87" cy="303.38" r="185.63" xlinkHref="#a"></radialGradient><radialGradient id="j" cx="13.87" cy="-22.62" r="185.63" xlinkHref="#a"></radialGradient></defs><g clip-path="url(#b)"><circle cx="27.5" cy="121.5" r="137.5" fill="url(#a)"></circle></g><g clip-path="url(#c)"><circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)"></circle></g><g clip-path="url(#e)"><circle cx="13.87" cy="303.38" r="185.63" fill="url(#f)"></circle></g><g clip-path="url(#g)"><circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)"></circle></g><g clip-path="url(#h)"><circle cx="27.5" cy="-41.5" r="148.5" fill="url(#d)"></circle></g><g clip-path="url(#i)"><circle cx="13.87" cy="-22.62" r="185.63" fill="url(#j)"></circle></g><circle cx="82" cy="46" r="5" fill="#fff"></circle><path fill="#fff" d="M64 48a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm0 24a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"></path><rect width="64" height="64" x="32" y="32" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="8" rx="12" ry="12"></rect></svg></i>
                        <span>
                            <h3 className='text-lg text-slate-400 font-semibold'>Instagram</h3>
                            <p className='font-bold '>@brightblusky17</p>
                        </span>
                    </div>
                </section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176204.381507439!2d47.866981663027936!3d46.365549549758015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41a90584a786c9ed%3A0x5a2144fabe5dcac2!2sAstrakhan%2C%20Astrakhan%20Oblast!5e0!3m2!1sen!2sru!4v1708962721354!5m2!1sen!2sru" className=' z-10 rounded-lg shadow-lg ring-2 ring-blue-500 w-11/12 h-72 ' loading="lazy" style={{ zoom: 1.5 }} ></iframe>

            </div>
            <img alt="..." src='https://shuffle.dev/saturn-assets/images/contact/light-left-blue.png' className='absolute bottom-60 rotate-180 right-0 z-0'></img>
        </div>
    )
}

export default page