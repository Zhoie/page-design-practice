import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    words: string[];
    typeSpeed?: number;
    backSpeed?: number;
    delay?: number;
    className?: string;
}

const Typewriter = ({ words, typeSpeed, backSpeed, delay, className }: TypewriterProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [isBackwards, setIsBackwards] = useState(false);

    useEffect(() => {
        const currentString = words[currentStringIndex];
        const stringLength = currentString ? currentString.length : 0;
        let timer: ReturnType<typeof setTimeout> | undefined;

        if (isBackwards) {
            if (currentIndex > 0) {
                timer = setTimeout(() => {
                    setDisplayedText(currentString.substring(0, currentIndex - 1));
                    setCurrentIndex(currentIndex - 1);
                }, backSpeed || 200);
            } else {
                timer = setTimeout(() => {
                    setIsBackwards(false);
                    setCurrentStringIndex((currentStringIndex + 1) % words.length);
                }, 0);
            }
        } else if (currentIndex < stringLength) {
            timer = setTimeout(() => {
                setDisplayedText(currentString.substring(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, typeSpeed || 100);
        } else {
            timer = setTimeout(() => {
                setIsBackwards(true);
            }, delay || 500);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [backSpeed, currentIndex, currentStringIndex, delay, isBackwards, typeSpeed, words]);

    return (
        <span className={className}> {displayedText} </span>
    );
}


export default Typewriter;




