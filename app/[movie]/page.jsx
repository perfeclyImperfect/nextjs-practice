import Image from 'next/image'
import React from 'react'

export default async function page({params}) {
  const { movie } = params
  const imgPath = 'https://image.tmdb.org/t/p/original'
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  return (
    <div className='grid grid-cols-3 gap-12'>
      <div>
       
      </div>
      <div>
      <h2 className='text-3xl'>{res.title}</h2>
        <h2 className='text-lg'>{res.release_date}</h2>
        <h2 className='text-lg'>Runtime: {res.runtime} mins</h2>
        <h2 className='bg-green-500 inline-block my-2 py-2 px-3 rounded-md'>{res.status}</h2>
        <Image
          className='w-full my-12' 
          src={imgPath+res.poster_path}
          width={600}
          height={600}
          alt={res.title}
        />
        <h2 className='text-md'>{res.overview}</h2>
      </div>
    </div>
  )
}
