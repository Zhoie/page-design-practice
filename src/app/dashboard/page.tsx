'use client'
import React from 'react'
import Sidebar from './components/Sidebar'
import Cards from './components/Cards'
import Chart from './components/Chart'
import Orders from './components/Orders'

const styles = {
    container: 'bg-zinc-200 w-screen flex flex-row gap-4',
}

export default function dashboard() {

    // const [selectedId, setSelectedId] = useState(null)
    return (

        <div className={styles.container}>
            <Sidebar />
            <div className='flex flex-col w-full mt-20'>
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


