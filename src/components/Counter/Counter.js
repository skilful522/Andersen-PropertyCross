import React, { useCallback } from 'react';
import style from './Counter.css';

const Counter = (props) => {
    const onIncrement = useCallback(() => {
        props.increment();
    }, []);
    return (
        <div className={style.wrapper}>
            <button className={style.counter} onClick={onIncrement}>
                {props.count}
            </button>
        </div>
    );
};

export default Counter;
