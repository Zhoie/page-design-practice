import React from 'react'
import Typewriter from './Typewriter'


const styles = {
    container: 'flex flex-col mx-4 items-center pb-6 justify-center text-white',
    textAnimate: 'text-6xl sm:text-8xl p-4 text-transparent bg-clip-text font-bold bg-gradient-to-r from-teal-500 to-teal-50',
    textPulse: 'text-2xl text-white font-bold animate-pulse',
    startBtn: ' px-4 py-2  my-4 bg-teal-400 text-zinc-950 text-sm sm:text-xl font-bold rounded-xl hover:text-teal-500 hover:bg-zinc-950 hover:ring-2 hover:ring-teal-500 transition ease-in-out duration-300',
}


export default function Hero() {

    return (
        <div className={styles.container}>
            <h1 >BudgetBee is a personal finance app </h1>
            <h2 >Track your income and expenses.</h2>
            <h3 >set and achieve your saving goals, and manage your</h3>
            <p className={styles.textAnimate}>
                <Typewriter words={['BTC', 'ETH','USDT']} typeSpeed={200} backSpeed={200} delay={800} />
                <span className={styles.textPulse}>.</span>
            </p>
            <h4 >BudgetBee is simple, intuitive, and fun to use. You can easily connect your bank accounts, credit cards, and bills to the app and see all your transactions in one place.</h4>
            <button type='button' className={styles.startBtn}>Get Started</button>

        </div>
    )
}
