import React, { useState } from 'react';
import classes from './CountPage.module.css';


const CountPage = () => {

    const [ count, setCount ] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.textAndBtn}>

            <p className={classes.text}>Count: {count}</p>
            <div className={classes.btnDiv}>
            <button className={classes.button} onClick={increment}>increment</button>
            <button className={classes.button} onClick={decrement}>decrement</button>
            </div>
            </div>


        </div>
    );
};

export default CountPage;