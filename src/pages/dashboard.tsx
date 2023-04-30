import React from 'react'
import Sidebar from '@/components/dashboardPage/Sidebar'
import Cards from '@/components/dashboardPage/Cards'
import Chart from '@/components/dashboardPage/Chart'
import Orders from '@/components/dashboardPage/Orders'



const styles = {
    container: 'bg-zinc-200 flex flex-row gap-4',
}

export default function dashboard() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className='flex flex-col w-full'>
                <Cards />
                <div className='flex flex-col gap-4 sm:flex-row'>
                    <Chart />
                    <Orders />
                </div>

            </div>

        </div>
    )
}

//fetch api from bloomberg


