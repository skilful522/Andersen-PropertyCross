import React, { useCallback } from 'react';
import SearchedListContainer from '../../containers/SearchedListContainer';
import { Redirect } from 'react-router-dom';
import styles from './ContentSearch.css';
import PropTypes from 'prop-types';
import Loader from '../../../Loader/Loader';
import cx from 'classnames';

const ContentSearchPure = ({ addSearchedLocation, getLocation }) => {
    const [location, setLocation] = React.useState('Newcastle');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState();
    const [isRedirect, setIsRedirect] = React.useState(false);

    const handleInputChange = useCallback(
        (event) => {
            setError();
            setLocation(event.target.value);
        },
        [location]
    );

    const handleRedirect = useCallback(() => {
        setIsRedirect(true);
    });

    const handleLocationClick = useCallback(() => {
        setLoading(true);
        return getLocation()
            .then((location) => setLocation(location))
            .then(() => setIsRedirect(true))
            .catch(() => setError('Unable to detect current location.'))
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
                    <button className={cx(styles.go, styles.button)} onClick={handleRedirect}>
                        Go
                    </button>
                    <button className={cx(styles.myLocation, styles.button)} onClick={handleLocationClick}>
                        My location
                    </button>
                </div>
            </div>
            {error ? <div className={styles.errorWrapper}>{error}</div> : <SearchedListContainer />}
        </div>
    );
};

ContentSearchPure.propTypes = {
    addSearchedLocation: PropTypes.func,
    getLocation: PropTypes.func,
};

export default ContentSearchPure;
