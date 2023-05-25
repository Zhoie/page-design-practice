import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs'


export default function PictureFrame() {

    const [x, setX] = React.useState(0)
    const [leftBtnSelectable, setLeftBtnSelectable] = React.useState(false)
    const [rightBtnSelectable, setRightBtnSelectable] = React.useState(true)
    const [currentImage, setCurrentImage] = React.useState(0)

    const images = [
        'https://i.pinimg.com/originals/9b/84/48/9b844861fae252035a18f3d67d59e6d6.jpg',
        'https://i.pinimg.com/564x/0c/df/26/0cdf261a983dd7d9c36d05517b01befe.jpg',
        'https://i.pinimg.com/564x/5c/b6/30/5cb63004540aa0d88301026ce6df3c48.jpg',
        'https://i.pinimg.com/564x/85/42/8d/85428d6d5737580b85717ba71993d332.jpg',
        'https://i.pinimg.com/564x/03/d1/75/03d1752f9ac875babe939ac6affdce0c.jpg'

    ]

    useEffect(() => {
        if (currentImage === 0) {
            setLeftBtnSelectable(false)
        } else if (currentImage === images.length - 1) {
            setRightBtnSelectable(false)
        } else {
            setLeftBtnSelectable(true)
            setRightBtnSelectable(true)
        }

    })

    const handleClick = (buttonTag: string) => {

        // if (currentImage === 0 || currentImage === images.length - 1) {
        //     setBtnSelectable(false)
        // }

        switch (buttonTag) {
            case 'left':

                if (currentImage === 0) {
                    return
                }
                // setLeftBtnSelectable(true)
                setCurrentImage(currentImage - 1)
                setX(x + 200)
                console.log('left')
                break
            case 'right':
                if (currentImage === images.length - 1) {
                    return
                }

                // setBtnSelectable(true)
                setCurrentImage(currentImage + 1)
                setX(x - 200)
                console.log('right')
                break
            default:
                console.log('default')
                break
        }

    }

    return (

        <div className='flex flex-col gap-2 items-center'>
            <div className='flex flex-row   mt-4  items-center gap-4 cursor-auto '>

                <button type='button' title='left' className={leftBtnSelectable ? 'text-4xl' : 'text-4xl text-gray-500 cursor-default'} onClick={() => handleClick('left')}>
                    <BsArrowLeftSquare />
                </button>

                <div className='w-[200px] flex overflow-hidden'>
                    <motion.div animate={{ x: x }} transition={{ ease: 'easeInOut', duration: 0.5 }} className='flex flex-nowrap' >

                        {images.map((image, index) => (
                            <Image className='' src={image} alt='' width={200} height={20} key={index} />
                        ))}

                    </motion.div>
                </div>

                <button type='button' title='right' className={rightBtnSelectable ? 'text-4xl' : 'text-4xl text-gray-500 cursor-default'} onClick={() => handleClick('right')}>
                    <BsArrowRightSquare />
                </button>
            </div>
            <div className='w-[200px] flex flex-row gap-4 items-center justify-center'>
                {images.map((image, index) => (
                    <span key={index} className={currentImage === index ? 'px-4 py-[2px] bg-slate-200' : 'px-4 py-[2px] bg-slate-400 opacity-30'} onClick={() => setCurrentImage(index)}></span>
                    // <span className={currentImage ?'px-4 py-[2px] bg-slate-200':'px-4 py-[2px] bg-slate-400'} ></span>

                ))}
            </div>
        </div>
    )
}
// 
