import React from 'react';
import { useState } from 'react';
import Button from './Button/Button';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleDecrement = () => {
        setCounter(counter - 1);
    }

  return (
    <div>
        <h1>{counter}</h1>
        <Button text="+" onClick={handleIncrement} />
        <Button text="-" onClick={handleDecrement} />
    </div>
  )
}

export default Counter;