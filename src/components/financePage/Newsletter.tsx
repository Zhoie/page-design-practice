import React from 'react'

const styles = {
    container: 'flex flex-col sm:flex-row w-screen gap-4 p-12 items-center justify-center',
    // emailContainer: 'grid grid-col-1 mx-auto items-center justify-center',
    newsletterContainer: '',
    input: 'w-80 h-10 border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent',
    button: 'h-10 p-2 items-center justify-center text-zinc-50 border-2 border-zinc-50 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition duration-300 ease-in-out',
}


export default function Newsletter() {
    return (
        <div className={styles.container}>
            {/* <div className={styles.emailContainer}> */}
            <h2 className='sm:max-w-[40rem] md:max-w-[80rem] py-4'>
                Subscribe to our newsletter to stay up-to-date on the latest personal finance tips and tricks!
            </h2>
            {/* </div> */}
            <div className={styles.newsletterContainer} >
                <div className='flex flex-row gap-4 m-auto'>
                    <input type='email' className={styles.input} placeholder='Enter your Email'></input>
                    <button type='button' className={styles.button} title='Notify me'>Notify</button>
                </div>
                <h4 className='pt-4'>We care about the protection of your data. </h4>
                <h4 className='underline cursor-pointer hover:text-zinc-50'>Privacy Policy.</h4>
            </div>

        </div>
    )
}
