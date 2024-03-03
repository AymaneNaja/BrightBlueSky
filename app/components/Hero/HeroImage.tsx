'use client'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {
  src: string
}

function HeroImage({ src }: Props) {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded ?
        <div className=" bg-slate-300 animate-pulse rounded-lg w-[150px] h-[220px]"></div> : null}
      <Image priority alt={'...'} onLoad={(e) => setLoaded(true)}
        className={`rounded-lg ${!loaded ? 'hidden' : 'block show-content'}  `} height={300} width={150} src={src}></Image>
    </>
  )
}

export default HeroImage