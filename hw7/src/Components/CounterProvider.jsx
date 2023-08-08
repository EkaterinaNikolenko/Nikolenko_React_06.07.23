import React from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { initialState, reducer } from '../reducer';

export const CounterContext = createContext(null);

const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = () => {
        dispatch({ type: "increment" });
    }

    const handleDecrement = () => {
        dispatch({ type: "decrement" });
    }

    const handleReset = () => {
        dispatch({ type: "reset" });
    }

    const value = {
        total: state.count,
        increment: handleIncrement,
        decrement: handleDecrement,
        reset: handleReset
    }

    return (
        <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
    )
}

export default CounterProvider;