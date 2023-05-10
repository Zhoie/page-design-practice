
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

const styles = {
    container: 'flex flex-row  p-4 mx-auto items-center justify-between',
    title: 'text-6xl text-transparent bg-clip-text bg-gradient-to-br from-teal-700 to-teal-200 font-bold',
    list: 'sm:flex flex-row gap-4 px-4 hidden',
    item: 'text-zinc-400 border-b-2 border-transparent object-bottom text-white hover:text-zinc-50 hover:border-b-2 hover:border-green-300  cursor-pointer ease-in-out duration-300',
    menuBtn: 'inset-right text-3xl text-zinc-400 cursor-pointer sm:hidden',
    listLeft: 'top-0 left-0 ml-2 max-w-[6rem] uppercase flex flex-col p-2 gap-4 sm:hidden',
    itemLeft: 'text-zinc-400 border-b-2 border-transparent object-bottom text-white hover:text-zinc-50 hover:border-b-2 hover:border-green-300  cursor-pointer ease-in-out duration-300',
}

export default function Navbar() {

    const [nav, setNav] = React.useState(false)

    const handleNavClick = () => {
        setNav(!nav)
    }

    return (
        <>

            <div className={styles.container}>
                <h1 className={styles.title}>Finance</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>Home</li>
                    <li className={styles.item}>Company</li>
                    <li className={styles.item}>Services</li>
                    <li className={styles.item}>About</li>
                    <li className={styles.item}>Contact</li>
                </ul>
                <div onClick={handleNavClick} className={styles.menuBtn}>
                    {!nav ? <GiHamburgerMenu /> : <AiOutlineClose />}
                </div>
            </div>


            <div className={nav ? 'ease-in-out duration-300' : '-translate-x-full ease-in-out duration-300'}>
                <ul className={styles.listLeft} >
                    <li className={styles.itemLeft}>Home</li>
                    <li className={styles.itemLeft}>Company</li>
                    <li className={styles.itemLeft}>Services</li>
                    <li className={styles.itemLeft}>About</li>
                    <li className={styles.itemLeft}>Contact</li>
                </ul>
            </div>

        </>

    )
}
