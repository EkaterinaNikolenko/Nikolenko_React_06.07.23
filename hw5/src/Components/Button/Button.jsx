import React from 'react';
import './Button.css';

const Button = (props) => {
    const { text, onClick, type = "button" } = props;
    return (
        <button className='button' type={type} onClick={onClick}>{text}</button>
    );
}

export default Button;