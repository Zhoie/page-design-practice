'use client'
import React from 'react'
import styles from './Navbar.module.css'
import {motion} from 'framer-motion'
import Block from './Block'
import { animations } from '../motions'


export default function Navbar() {
    return (
        <motion.div className={styles.navbar} variants={animations} initial={'initial'} animate={'show'} whileHover={'hover'} >
            <p>Motions</p>
            {/* <Block /> */}
            
        </motion.div>
    )
}
