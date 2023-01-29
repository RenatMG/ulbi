import React, { useState } from 'react';
import classNames from './Counter.module.scss';

const Counter = () => {
    const [value, setValue] = useState(0);
    const increment = () => {
        setValue(value=> value + 1);
    };
    return (
        <div className={classNames.button}>
            <h1>{value}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;
