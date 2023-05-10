import React from 'react'
import { motion } from 'framer-motion'


const styles = {
    container: 'flex flex-col w-full mx-auto gap-2 p-4',
    card: 'flex flex-row gap-4 p-4 bg-white items-center justify-between rounded-lg shadow-lg',
    count: 'text-xl font-bold',
    title: 'text-sm mt-2',
    percentage: ' w-20 bg-teal-200 text-teal-600 text-center rounded-xl p-4',
}
const cardData = [
    {
        count: '$1,000,000',
        title: 'Total Assets',
        percentage: '10%'
    },
    {
        count: '$500,000',
        title: 'Total Liabilities',
        percentage: '5%'
    },
    {
        count: '$500,000',
        title: 'Net Worth',
        percentage: '5%'
    }
];

export default function Cards() {
    return (
        <div  className={styles.container}>
            {cardData.map((card, index) => (
                <div key={index} className={styles.card}>
                    <div className='flex flex-col'>
                        <div className={styles.count}>{card.count}</div>
                        <div className={styles.title}>{card.title}</div>
                    </div>
                    <div className={styles.percentage}>{card.percentage}</div>
                </div>
            ))}
        </div>
    )
}
