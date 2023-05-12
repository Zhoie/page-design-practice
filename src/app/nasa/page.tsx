
import React from 'react'
import { getNasaData } from '../api/nasa'
import { Apod } from '../api/types'
import Image from 'next/image'


export default async function page() {

  const data: Apod = await getNasaData()
  return (
    <div className='text-white'>
      <p className=''> Title: {data.title}</p>
      <Image src={data.hdurl} width={400} height={400} alt=''/>
      <p>copyright : {data.copyright}</p>
      <p>explanation: {data.explanation}</p>
    </div>
  )
}
