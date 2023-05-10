import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

const styles = {
    container: 'py-6 text-white',
    iconContainer: 'flex justify-center gap-4',
    icon:'flex justify-center gap-4 text-4xl cursor-pointer hover:scale-110 duration-300 ease-in-out transform'
}

const icons = {
    dribbble: <FaDribbbleSquare />,
    facebook: <FaFacebookSquare />,
    instagram: <FaInstagramSquare />,
    twitter: <FaTwitterSquare />,

}

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
           
            {Object.entries(icons).map((icon,index)=>(

                
                <div className={styles.icon} key={index}>
                    
                    {icon[1]}
                </div>
            ))}


            </div>
        </div>
    )
}
