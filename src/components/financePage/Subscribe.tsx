import React from 'react'
import { FaUser, FaUserFriends, FaUsers } from 'react-icons/fa'

const data = {
    "Single User": {
        icon: <FaUser />,
        price: "$9.99",
        features: {
            Storage: '100 GB ',
            Users: '1 Users ',
            Send: '10 GB',
        },
    },
    "Parnership User": {
        icon: <FaUserFriends />,
        price: "$19.99",
        features: {
            Storage: '2 TB ',
            Users: '3 Users ',
            Send: '20 GB',
        },
    },
    "Family User": {
        icon: <FaUsers />,
        price: "$29.99",
        features: {
            Storage: '5 TB ',
            Users: '5 Users',
            Send: '50 GB',
        },
    }
}

const styles = {
    container: 'bg-zinc-50',
    userContainer: 'flex flex-col sm:flex-row gap-4 p-12 items-center justify-center',
    card: "flex flex-col bg-zinc-50 shadow w-[20rem] sm:w-max-[30rem] px-8 py-4 items-center gap-4 hover:translate-y-1 hover:shadow-xl transition duration-300 ease-in-out",
    icon: 'text-4xl -translate-y-4',
    btn:'px-4 py-2  my-4 bg-teal-400 text-zinc-950 text-sm sm:text-xl font-bold rounded-xl hover:text-teal-500 hover:bg-zinc-950  transition ease-in-out duration-300'
}

export default function Subscribe() {
    return (
        <div className={styles.container}>
            <div className={styles.userContainer}>

                {Object.entries(data).map(([key, value], index) => (

                    <div className={styles.card} key={index}>
                        <div className={styles.icon}>
                        {value.icon}
                        </div>
                        <h3>{key}</h3>
                        <h4>{value.price}</h4>

                        <ul className='gird grid-flow-col items-center justify-center'>
                            {Object.entries(value.features).map(([feature, description], index) => (
                                <li key={index}>
                                    <div className='text-zinc-950 text-xl'>
                                    {feature}: {description}
                                    </div>
                                    
                                </li>
                               
                            ))}
                            
                        </ul>
                        <button className={styles.btn} type='button'>Start Trial</button>


                    </div>

                ))}
                {/* {Object.entries(data).map(([key, value], index) => (
                    <div key={index}>
                        {value.icon}
                        <h3>{key}</h3>
                        <h4>{value.price}</h4>
                        <ul>
                            {Object.entries(value.features).map(([feature, description],index) => (
                                <li key={index}>
                                    {feature}: {description}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))} */}

            </div>

        </div>
    )
}
