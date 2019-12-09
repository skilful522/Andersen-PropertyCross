import React, { useCallback } from 'react';
import style from './Counter.css';
import PropTypes from 'prop-types';

const Counter = ({ increment, count }) => {
    const onIncrement = useCallback(() => {
        increment();
    }, []);
    return (
        <div className={style.wrapper}>
            <button className={style.counter} onClick={onIncrement}>
                {count}
            </button>
        </div>
    );
};

Counter.propTypes = {
    increment: PropTypes.func,
    count: PropTypes.number,
};

export default Counter;
