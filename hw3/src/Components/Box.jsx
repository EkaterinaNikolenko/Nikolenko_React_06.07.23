import React, { useEffect } from 'react';
import './Box.css';

const Box = () => {
    useEffect(() => {
        const handleClick = () => {
            console.log("mousemove");
        }

        window.addEventListener("mousemove", handleClick);

        return () => {
            window.removeEventListener("mousemove", handleClick);
        }
    }, [])

    return (
        <div className='box'></div>
    )
}

export default Box;