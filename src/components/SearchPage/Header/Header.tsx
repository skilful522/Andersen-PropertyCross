import React, { useCallback } from 'react';
import styles from './Header.css';
import { Redirect } from 'react-router-dom';
import cx from 'classnames';

const Header = () => {
    const [isRedirect, setIsRedirect] = React.useState<boolean>(false);

    const handleClick = useCallback(() => {
        setIsRedirect(true);
    }, [isRedirect]);

    if (isRedirect) {
        return <Redirect to="/favorites" from="/" />;
    }

    return (
        <div className={styles.wrapper}>
            <div className="header">
                <div className={styles.title}>
                    <h1 className={styles.titleName}>PropertyCross</h1>
                    <button className={cx(styles.faves, styles.button)} onClick={handleClick}>
                        Faves
                    </button>
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
