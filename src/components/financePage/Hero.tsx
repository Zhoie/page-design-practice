import React from 'react'
import Typewriter from './Typewriter'

const styles = {
    container: 'flex flex-col mx-4 items-center justify-center text-white',
    title: 'text-sm sm:text-xl uppercase  text-teal-400  font-bold',
    textA: 'text-2xl sm:text-4xl text-zinc-50 font-semibold',
    textB: 'text-sm sm:text-xl   text-teal-400 font-bold',
    textC: 'text-sm sm:text-xl text-zinc-500 font-bold',
    textAnimate: 'text-6xl sm:text-8xl p-4 text-transparent bg-clip-text font-bold bg-gradient-to-r from-teal-500 to-teal-50',
    textPulse: 'text-2xl text-white font-bold animate-pulse',
    startBtn: ' px-4 py-2  mt-4 bg-teal-400 text-zinc-950 text-sm sm:text-xl font-bold rounded-xl hover:text-teal-500 hover:bg-zinc-950 hover:ring-2 hover:ring-teal-500 transition ease-in-out duration-300',
}


export default function Hero() {

    return (
        <div className={styles.container}>
            <p className={styles.title}>BudgetBee is a personal finance app </p>
            <p className={styles.textA}>Track your income and expenses.</p>
            <p className={styles.textB}>set and achieve your saving goals, and manage your</p>
            <p className={styles.textAnimate}>
                <Typewriter words={['BTC', 'ETH','USDT']} typeSpeed={200} backSpeed={200} delay={800} />
                <span className={styles.textPulse}>.</span>
            </p>
            <p className={styles.textC}>BudgetBee is simple, intuitive, and fun to use. You can easily connect your bank accounts, credit cards, and bills to the app and see all your transactions in one place.</p>
            <button className={styles.startBtn}>Get Started</button>

        </div>
    )
}
