import React from 'react';
import './Input.css';

const Input = (props) => {
    const { type = "text", value, placeholder, onChange, checked } = props;
    return (
        <input className='input'
            type={type}
            value={value}
            placeholder={placeholder}
            checked={checked}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default Input;