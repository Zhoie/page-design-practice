'use client'

import React, { use } from 'react'
import { useRef, useState, RefObject, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Block from './components/Block'
import RandomColorButton from './components/RandomColorButton'
import PictureFrame from './components/PictureFrame'

export default function Framer() {

  const myRef: RefObject<HTMLParagraphElement> = useRef(null)

  const handleClick = () => {
    const url = 'https://www.google.com'
    window.open(url, '_blank')

    // if (myRef.current) {
    //   myRef.current.innerHTML = 'hello'

    // }
  }

  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.documentElement.style.setProperty('--changeTextColor', `${randomColor}`);
  }

  return (

    <div className='flex flex-col'>
      <Navbar />
      <div className='flex flex-col mt-10 mx-auto justify-center items-center rounded-xl cursor-pointer '>
        {/* <motion.div variants={animations} initial='hidden' animate={'show'} whileHover={'hover'}> */}
        <motion.div >

          <Block onClick={handleClick} text='hello google' />
          <RandomColorButton text='random color' />
        </motion.div>
        <PictureFrame />
      </div>

      {/* <meter min={0} max={100} low={30} high={70} optimum={0} value={25} >25</meter> */}

    </div >


  )
}
