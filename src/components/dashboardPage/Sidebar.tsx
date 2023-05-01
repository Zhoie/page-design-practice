import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { AiOutlineUser, AiOutlineShopping, AiOutlineSetting } from 'react-icons/ai'
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs'
import { CgMenuGridR } from 'react-icons/cg'
import { RiVipDiamondLine } from 'react-icons/ri'

const styles = {
    container: "left-0 inset-y-0 w-20 bg-white h-screen",
    ul: 'flex flex-col text-3xl p-4  gap-4 items-center justify-center',
    li: 'p-2 first:border-b-2 border-black hover:bg-neutral-200 hover:rounded-xl hover:border-transparent hover:scale-110 transform transition-all duration-300 ease-in-out',
    expandBtn: 'hidden sm:block'

}

const icons = [<RiVipDiamondLine />,
<CgMenuGridR />,
<AiOutlineUser />,
<AiOutlineShopping />,
<AiOutlineSetting />,]

export default function Sidebar() {

    const [expand, setExpand] = useState(false)

    const router = useRouter()

    const handleClick = (index: number) => {
        switch (index) {
            case 0: router.push('/')
        }
    }

    const hanldeExpandBtnClick = () => {
        setExpand(!expand)
    }

    return (
        <div className={styles.container}>

            <ul className={styles.ul}>
                {icons.map((icon, index) => (

                    <li key={index} onClick={() => handleClick(index)} className={styles.li}>
                        {icon}
                    </li>

                ))}
                {/* <li className={`${styles.li} ${styles.expandBtn}`}>
                    <BsArrowRightSquare />
                </li> */}
            </ul>
        </div>
    )
}
