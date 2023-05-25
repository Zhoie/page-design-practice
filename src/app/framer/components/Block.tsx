'use client'
import React from 'react'
import { motion } from 'framer-motion'
// abutton with a shimmer effect


export default function Block({ text, onClick }: { text?: string, onClick?: () => void }) {
  return (
    <div className=''>
      {/* <motion.div className='absolute p-8 m-4 bg-zinc-50' variants={animations} initial='hidden' animate='show' whileHover={'tap'}></motion.div> */}
      <motion.div onClick={onClick} layout className='px-12 py-4 rounded-xl border-none bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.slate.950)_0%,theme(colors.slate.300)_10%,theme(colors.slate.800)_20%)] animate-[shimmer_3s_linear_infinite]
      relative
      after:flex after:absolute after:bg-slate-950 after:inset-[1px] after:rounded-xl after:content-[attr(aria-label)] after:text-white after:items-center after:justify-center' aria-label={text}><span className='opacity-0'>{text}</span></motion.div>
    </div>

  )
}
