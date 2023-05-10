import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, layouts } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
        borderColor: string;
        borderWidth: number;
    }[];
}

const styles = {
    container: 'flex mx-4 sm:w-[50vw] h-[50vh]  items-center justify-center bg-white p-4 rounded-lg shadow-lg',
    chart: 'w-full h-full',
}

export default function Chart() {
    const [chartData, setChartData] = useState<ChartData>({
        labels: [],
        datasets: []
    });
    const [charOptions, setCharOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Total Liabilities',
                    data: [50, 100, 150, 200, 250, 300, 400],
                    backgroundColor: '#98F6E4',
                    borderColor: '#98F6E4',
                    borderWidth: 1,
                },
                {
                    label: 'Total Assets',
                    data: [100, 200, 300, 400, 500, 600, 800],
                    backgroundColor: '#0D9488',
                    borderColor: '#0D9488',
                    borderWidth: 1,
                },
            ]
        })

        setCharOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true,
        })

    }, [setChartData, setCharOptions])

    return (
        <div className={styles.container}>
            <div className={styles.chart}>
                <Bar data={chartData} options={charOptions} />
            </div>
        </div>
    )
}
