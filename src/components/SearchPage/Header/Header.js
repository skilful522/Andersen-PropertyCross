import React from 'react';
import styles from './Header.css';

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className="header">
                <div className={styles.title}>
                    <h1 className={styles.titleName}>PropertyCross</h1>
                    <button className={`${styles.faves} ${styles.button}`}>Faves</button>
                </div>
                <div className={styles.instructionText}>
                    Use the form below to search for houses to buy. You can search by place-name, postcode, or click
                    &apos;My location&apos;, to search in your current location
                </div>
            </div>
        </div>
    );
};

export default Header;
