
import React from 'react'
import { getNasaData } from '../api/nasa'
import { Apod } from '../api/types'
import Image from 'next/image'


export default async function page() {

  const data: Apod = await getNasaData()
  return (
    <div className=' flex flex-col text-white items-center justify-center'>
      <p className='p-4 text-2xl'> {data.title}</p>
      <Image src={data.hdurl} width={400} height={400} alt=''/>
      <p className='p-2 text-xs'>via {data.copyright}</p>
      <p className='mx-10'> {data.explanation}</p>
    </div>
  )
}
