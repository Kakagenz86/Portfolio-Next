'use client'

import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let interval;
        if (currentIndex < text.length) {
            interval = setInterval(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);
        } else {
            // Reset the typing animation
            setTimeout(() => {
                setCurrentText('');
                setCurrentIndex(0);
            }, delay * text.length); // Wait for the entire text to display before resetting
        }
        
        return () => {
            clearInterval(interval);
        };
    }, [currentIndex, delay, text]);

    return <span className='title-hero lg:text-5xl lg:absolute lg:top-10 xs:absolute xs:top-24'>{currentText}</span>;
};

export default Typewriter;
