import React from 'react'

export default function RandomColorButton({ text }: { text?: string }) {


    const changeColor = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        document.documentElement.style.setProperty('--randomTextColor', `${randomColor}`);
    }
    return (
        <div>
            {/* mt-4 border-2 rounded-xl select-none border-[var(--changeTextColor,white)] text-xl p-4 font-bold text-center text-[var(--changeTextColor,white)] transition-all duration-700 */}
            <p className={`mt-4 border-2 rounded-xl select-none border-[var(--randomTextColor,white)] text-xl p-4 font-bold text-center text-[var(--randomTextColor,white)] transition-all duration-700`} onClick={changeColor} >{text}</p>
        </div>
    )
}
