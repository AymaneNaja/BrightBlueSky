'use client'
import React from 'react'
import Logo from '../../../photos/logo/png/Color logo - no background.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
type Props = {}

function Navbar({ }: Props) {
    const pathname = usePathname()
    return (
        <div className=" flex justify-between  w-full px-2 sm:px-2 md:px-4 lg:px-6 xl:px-8">
            <Link href={'/'} className='hover:scale-110 cursor-pointer transition-all'><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="120"
                height="50" viewBox="0 0 3448.103660698048 1254.6902499545322">
                <g transform="scale(22.40518303490236) translate(10, 10)">
                    <defs id="SvgjsDefs2831"></defs><g id="SvgjsG2832" transform="matrix(1.9007391227505699,0,0,1.9007391227505699,-1.1404437455532546,-2.014780868911074)" fill="#2864c4"><path d="M5.38 6.52 q0 1.18 -0.21 1.92 t-0.79 1.62 q1 0.52 1 2.06 l0 5.58 q0 2.3 -2.24 2.3 l-2.54 0 l0 -18.68 l2.54 0 q2.24 0 2.24 2.32 l0 2.88 z M2.98 18.34 q0.44 0 0.59 -0.23 t0.15 -0.63 l0 -5.14 q0 -0.32 -0.08 -0.52 t-0.3 -0.28 q-0.66 0.94 -0.87 1.51 t-0.21 1.49 l0 3.8 l0.72 0 z M3.72 3.84 q0 -0.4 -0.15 -0.63 t-0.59 -0.23 l-0.72 0 l0 7.2 l0.16 -0.22 q0.8 -1.1 1.05 -1.69 t0.25 -1.51 l0 -2.92 z M11.36 20 l-1.64 0 l-0.02 -5.72 q0 -0.72 -0.14 -1.21 t-0.54 -1.09 q-0.46 0.7 -0.62 1.22 t-0.16 1.34 l0 5.46 l-1.66 0 l0 -18.68 l2.54 0 q2.24 0 2.24 2.32 l0 2.88 q0 1.32 -0.26 2.1 t-1.04 1.9 q0.76 1.08 1.03 1.85 t0.27 2.03 l0 5.6 z M9.700000000000001 3.84 q0 -0.4 -0.15 -0.63 t-0.57 -0.23 l-0.74 0 l0 7.2 q0.06 -0.06 0.09 -0.12 t0.07 -0.1 q0.8 -1.1 1.05 -1.69 t0.25 -1.51 l0 -2.92 z M14.22 1.3200000000000003 l0 18.68 l-1.66 0 l0 -18.68 l1.66 0 z M20.2 17.7 q0 2.3 -2.24 2.3 l-0.3 0 q-1.2 0 -1.72 -0.61 t-0.52 -1.69 l0 -14.34 q0 -1.1 0.52 -1.7 t1.72 -0.6 l0.3 0 q1.2 0 1.72 0.6 t0.52 1.7 l0 4.7 l-1.66 0 l0 -4.48 q0 -0.4 -0.15 -0.63 t-0.59 -0.23 q-0.42 0 -0.57 0.23 t-0.15 0.63 l0 13.9 q0 0.4 0.15 0.63 t0.57 0.23 q0.44 0 0.59 -0.23 t0.15 -0.63 l0 -4.48 l-0.72 0 l0 -1.66 l2.38 0 l0 6.36 z M21.400000000000002 1.3200000000000003 l0 18.68 l1.64 0 l0.02 -5.58 q0 -0.92 0.25 -1.51 t1.05 -1.69 l0.16 -0.22 l0 9 l1.66 0 l0 -18.68 l-1.66 0 l0 5.34 q0 0.96 -0.24 1.56 t-1.04 1.7 q-0.18 0.24 -0.2 0.26 l0 -8.86 l-1.64 0 z M32.18 2.9800000000000004 l-1.56 0 l0 17.02 l-1.66 0 l0 -17.02 l-1.56 0 l0 -1.66 l4.78 0 l0 1.66 z"></path></g><g id="SvgjsG2833" transform="matrix(1.900739314164109,0,0,1.900739314164109,61.859556139598595,-2.0147846971816956)" fill="#1c70d8"><path d="M5.38 6.52 q0 1.18 -0.21 1.92 t-0.79 1.62 q1 0.52 1 2.06 l0 5.58 q0 2.3 -2.24 2.3 l-2.54 0 l0 -18.68 l2.54 0 q2.24 0 2.24 2.32 l0 2.88 z M2.98 18.34 q0.44 0 0.59 -0.23 t0.15 -0.63 l0 -5.14 q0 -0.32 -0.08 -0.52 t-0.3 -0.28 q-0.66 0.94 -0.87 1.51 t-0.21 1.49 l0 3.8 l0.72 0 z M3.72 3.84 q0 -0.4 -0.15 -0.63 t-0.59 -0.23 l-0.72 0 l0 7.2 l0.16 -0.22 q0.8 -1.1 1.05 -1.69 t0.25 -1.51 l0 -2.92 z M8.24 1.3200000000000003 l0 17 l1.46 0 l0 1.68 l-3.12 0 l0 -18.68 l1.66 0 z M15.68 1.3200000000000003 l0 16.38 q0 2.3 -2.24 2.3 l-0.3 0 q-1.2 0 -1.72 -0.61 t-0.52 -1.69 l0 -16.38 l1.66 0 l0 16.16 q0 0.4 0.15 0.63 t0.57 0.23 t0.58 -0.23 t0.16 -0.63 l0 -16.16 l1.66 0 z M18.54 3 l0 6.82 l1.48 0 l0 1.68 l-1.48 0 l0 6.82 l1.48 0 l0 1.68 l-3.14 0 l0 -18.68 l3.14 0 l0 1.68 l-1.48 0 z M23.12 8.22 q0.24 0.6 1.04 1.7 q0.8 1.12 1.16 1.74 t0.52 1.29 t0.16 1.71 l0 3.04 q0 2.3 -2.24 2.3 l-0.3 0 q-1.2 0 -1.72 -0.61 t-0.52 -1.69 l0 -4.66 l1.66 0 l0 4.44 q0 0.4 0.15 0.63 t0.57 0.23 t0.58 -0.23 t0.16 -0.63 l0 -3.06 q0 -0.92 -0.25 -1.5 t-1.05 -1.7 q-0.8 -1.1 -1.16 -1.74 t-0.51 -1.32 t-0.15 -1.72 l0 -3.08 q0 -1.1 0.52 -1.7 t1.72 -0.6 l0.3 0 q2.24 0 2.24 2.3 l0 4.7 l-1.66 0 l0 -4.48 q0 -0.4 -0.16 -0.63 t-0.58 -0.23 t-0.57 0.23 t-0.15 0.63 l0 3.08 q0 0.96 0.24 1.56 z M31.720000000000002 12.42 q0.26 0.78 0.26 2.1 l0 5.48 l-1.64 0 l-0.02 -5.72 q0 -0.72 -0.14 -1.21 t-0.54 -1.09 q-0.46 0.7 -0.62 1.22 t-0.16 1.34 l0 5.46 l-1.66 0 l0 -18.68 l1.66 0 l0 8.86 q1.46 -1.62 1.46 -3.42 l0.02 -5.44 l1.64 0 l0 5.2 q0 1.32 -0.26 2.1 t-1.04 1.9 q0.78 1.12 1.04 1.9 z M37.9 1.3200000000000003 l0 18.68 l-1.66 0 l0 -5.6 q0 -0.88 -0.25 -1.47 t-1.05 -1.69 t-1.16 -1.74 t-0.51 -1.32 t-0.15 -1.72 l0 -5.14 l1.66 0 l0 5.34 q0 0.96 0.24 1.57 t1.04 1.71 l0.18 0.26 l0 -8.88 l1.66 0 z"></path></g>
                </g>
            </svg>
            </Link>
            <div className="w-full sm:w-full md:w-full lg:w-10/12 xl:w-8/12  hidden sm:hidden md:grid lg:grid xl:grid">
                <ul className="flex justify-end items-center px-2 transition-all gap-6 sm:gap-8 md:gap-14 lg:gap-16 xl:gap-16 justify-items-stretch  ">
                    <li className={`transition-all ${pathname == '/' ? 'font-extrabold bg-gradient-to-r from-sky-400 to-blue-500 text-transparent  bg-clip-text ' : 'font-bold hover:text-sky-600'} `}>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li className={`transition-all ${pathname == '/projects' ? 'font-extrabold bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text ' : 'font-bold hover:text-sky-600'} `}>
                        <Link href={'/projects'}>Projects</Link>
                    </li>
                    <li className={`transition-all ${pathname == '/services' ? 'font-extrabold bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text ' : 'font-bold hover:text-sky-600'} `}>
                        <Link href={'/services'}>Services</Link>
                    </li>
                    <li className={`transition-all ${pathname == '/contact' ? 'font-extrabold bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text ' : 'font-bold hover:text-sky-600'} `}>
                        <Link href={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='dropdown pt-4'>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle block sm:block md:hidden lg:hidden xl:hidden scale-110 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  -translate-x-32 z-20 p-2 shadow  rounded-box w-52 bg-white">
                    <li className=' font-semibold p-0.5  rounded-md hover:bg-blue-500 hover:text-white transition-all '><a href='/'>Home</a></li>
                    <li className=' font-semibold p-0.5  rounded-md hover:bg-blue-500 hover:text-white transition-all '><a href='/projects'>Projects</a></li>
                    <li className=' font-semibold p-0.5  rounded-md hover:bg-blue-500 hover:text-white transition-all '><a href='/services'>Services</a></li>
                    <li className='font-semibold p-0.5  rounded-md hover:bg-blue-500 hover:text-white transition-all '><a href='/contact'>Contact</a></li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar