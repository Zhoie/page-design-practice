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

        if (isBackwards) {
            if (currentIndex > 0) {
                const timer = setTimeout(() => {
                    setDisplayedText(currentString.substring(0, currentIndex - 1));
                    setCurrentIndex(currentIndex - 1);
                 // Adjust the delay time to change the speed of the typewriter effect
                }, backSpeed || 200); 
                return () => clearTimeout(timer);
            } else {
                setIsBackwards(false);
                setCurrentStringIndex((currentStringIndex + 1) % words.length);
            }
        } else {
            if (currentIndex < stringLength) {
                const timer = setTimeout(() => {
                    setDisplayedText(currentString.substring(0, currentIndex + 1));
                    setCurrentIndex(currentIndex + 1);
                // Adjust the delay time to change the speed of the typewriter effect
                }, typeSpeed || 100); 
                return () => clearTimeout(timer);
            } else {

                // Adjust the delay time to change the speed of the typewriter effect
                setTimeout(() => {
                    setIsBackwards(true);
                }, delay || 500)
            }
        }
    }, [currentIndex, isBackwards, words, currentStringIndex]);

    return (
        <span className={className}> {displayedText} </span>
    );
}


export default Typewriter;





