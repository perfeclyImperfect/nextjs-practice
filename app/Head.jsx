import Link from 'next/link'
import React from 'react'

export default function Head() {
  return (
    <div className='w-full grid grid-cols-4 py-4 px-4 bg-green-600'>
        <div>
            <Link href={`/latest`}>New Release</Link>
        </div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}
