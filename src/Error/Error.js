import React from 'react';
import styles from './Error.css';
import PropTypes from 'prop-types';

const Error = ({ error }) => {
    return <div className={styles.errorWrapper}>{error}</div>;
};

Error.propTypes = {
    error: PropTypes.string,
};

export default Error;
