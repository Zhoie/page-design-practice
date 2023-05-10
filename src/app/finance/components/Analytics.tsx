import React from 'react'
import Image from 'next/image'

const images = {
    chip: {
        name: "chip",
        src: "https://th.bing.com/th/id/OIG.12UTrKIpPpIJ3HO8.X8o?pid=ImgGn",
        width: 400,
        height: 400,
    }
}

const styles = {
    container: ' flex flex-col bg-white py-16 px-4',
    mainContainer: 'flex flex-col sm:flex-row bg-white py-16 px-4',
    image: 'rounded-full p-8 m-auto ',
    contextContainer: 'grid grid-row-2 mx-2 px-2 gap-2 items-center text-center',
    context: 'text-xl text-zinc-950 font-bold',
    btn: ' px-4 py-2 my-4 mx-auto bg-zinc-50 border-2 border-teal-500 text-teal-500 text-sm sm:text-xl font-bold rounded-xl hover:border-transparent hover:text-teal-500 hover:bg-zinc-950 transition ease-in-out duration-300',

}


export default function Analytics() {

    return (
        <div className={styles.container}>
            <div className={styles.mainContainer} >
                <Image className={styles.image} src={images.chip.src} width={images.chip.width} height={images.chip.height} alt={images.chip.name} />
                <div className={styles.contextContainer}>

                    <h1>Focus on speed and performance</h1>
                    <p className={styles.context}>Since BudgetBee is a personal finance app that uses a fast chip, the website design should convey a sense of speed and efficiency. This could be achieved through the use of clean, minimalist design elements, fast-loading animations, and a focus on simplicity and ease-of-use.</p>
                </div>
            </div>
            <button className={styles.btn} title='start' type='button'>Start</button>
        </div>
    )
}
