import React from 'react'
import { FaUser, FaUserFriends, FaUsers } from 'react-icons/fa'

const styles = {
    container: 'bg-zinc-50 h-screen',
    userContainer: 'flex flex-col sm:flex-row gap-4 p-12 items-center justify-center',
}

const data = {
    "Single User": {
        icon: <FaUser />,
        price: "$9.99",
        features: {
            Storage: '100 GB Storage',
            Users: '1 Users Allowed',
            Send: '10 GB',
        },
    },
    "Parnership User": {
        icon: <FaUserFriends />,
        price: "$19.99",
        features: {
            Storage: '2 TB Storage',
            Users: '3 Users Allowed',
            Send: '20 GB',
        },
    },
    "Family User": {
        icon: <FaUsers />,
        price: "$29.99",
        features: {
            Storage: '5 TB Storage',
            Users: '5 Users Allowed',
            Send: '50 GB',
        },
    }
}

export default function Subscribe() {
    return (
        <div className={styles.container}>
            <div className={styles.userContainer}>
                {Object.entries(data).map(([key, value], index) => (
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
                ))}

            </div>

        </div>
    )
}
