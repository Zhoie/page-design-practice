import React from 'react'
import Link from 'next/link'

import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa'

const styles = {
    container: 'absolute flex flex-row items-center justify-center inset-x-0 bottom-0 py-6 gap-4 text-white',
    icon: 'flex text-4xl cursor-pointer hover:scale-110 duration-300 ease-in-out transform'
}

const icons = {
    twitter: {
        icon: <FaTwitterSquare />,
        link: 'https://twitter.com/izhoie',
    },
    github: {
        icon: <FaGithubSquare />,
        link: 'https://github.com/Zhoie/page-design-practice'

    }
}

export default function Footer() {
    return (

        <div className={styles.container}>
            {Object.entries(icons).map((icon, index) => (
                <div className={styles.icon} onClick={()=>window.open(icon[1].link,'_blank')} key={index}>
                    {icon[1].icon }
                </div>
              


            ))}




                </div>
    )
}
