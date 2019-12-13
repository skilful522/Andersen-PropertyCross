import React, { useCallback, useState } from 'react';
import SearchedListContainer from '../../containers/SearchedListContainer';
import { Redirect } from 'react-router-dom';
import styles from './ContentSearch.css';
import PropTypes from 'prop-types';
import Loader from '../../../Loader/Loader';
import cx from 'classnames';

const ContentSearchPure = ({ addSearchedLocation }) => {
    const [location, setLocation] = useState('Newcastle');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [isRedirect, setIsRedirect] = useState(false);

    const handleInputChange = useCallback(
        (event) => {
            setError();
            setLocation(event.target.value);
        },
        [location]
    );

    const handleFetchApartment = useCallback(() => {
        setLoading(true);
        return addSearchedLocation(location)
            .then(() => setIsRedirect(true))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    });

    if (loading) {
        return <Loader />;
    }

    if (isRedirect) {
        return <Redirect to={`/results/${location}`} from="/" />;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.userInteraction}>
                <div className={styles.inputWrapper}>
                    <input className={styles.searchInput} placeholder="Newcastle" onChange={handleInputChange} />
                </div>
                <div className={styles.navigationButtons}>
                    <button className={cx(styles.go, styles.button)} onClick={handleFetchApartment}>
                        Go
                    </button>
                    <button className={cx(styles.myLocation, styles.button)}>My location</button>
                </div>
            </div>
            {error ? <div className={styles.errorWrapper}>{error}</div> : <SearchedListContainer />}
        </div>
    );
};

ContentSearchPure.propTypes = {
    addSearchedLocation: PropTypes.func,
};

export default ContentSearchPure;
