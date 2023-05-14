'use client'

import React from 'react'
import Navbar from './components/Navbar'
import Block from './components/Block'
import { motion } from 'framer-motion'

export default function Framer() {
  
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex mt-10 mx-auto justify-center items-center rounded-xl cursor-pointer '>
        {/* <motion.div variants={animations} initial='hidden' animate={'show'} whileHover={'hover'}> */}
        <motion.div >

          <Block text='hello' />

        </motion.div>
      </div>
    </div>

  )
}
