import React from 'react'

type Props = {}

async function Test({ }: Props) {
    const res = await fetch('https://photoslibrary.googleapis.com/v1/albums', { headers: { 'Content-type': 'application/json ', 'Authorization': 'Bearer 928217379159-jd44i67tv3eaa3jotsoia0cee77jhpv6.apps.googleusercontent.com' } })
    console.log(res)
    return (
        <div></div>
    )
}

export default Test