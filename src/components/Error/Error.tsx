import React from 'react';
import styles from './Error.css';

interface Props {
    error: string;
}

const Error = ({ error }: Props) => {
    return <div className={styles.errorWrapper}>{error}</div>;
};

export default Error;
