import React from 'react'
import { data } from './data/data'

import { FaShoppingBag } from 'react-icons/fa'

const styles = {
  contanier: 'flex p-2 mx-4 items-center justify-center rounded-lg bg-white',
  ul: 'w-full flex flex-col gap-2 h-[40vh] overflow-y-scroll ',
  li: 'flex flex-row justify-between items-center p-2 rounded-lg bg-white hover:bg-neutral-200 hover:shadow-lg transform transition-all duration-300 ease-in-out',
  icon: 'text-3xl text-teal-200'
}

export default function Orders() {

  return (
    <div className={styles.contanier}>
      <ul className={styles.ul}>

        {data.map((item, index) => (

          <li key={index} className={styles.li}>
            <div className='flex flex-col gap-2'>
              <div className={styles.icon}>
                <FaShoppingBag />
              </div>
              <p>{item.name.first} {item.name.last}</p>
            </div>

            <p className=''>${item.total}</p>
            <p>{item.date}</p>


          </li>
        ))}
      </ul>
    </div>
  )
}
