import React, { useCallback } from 'react';
import SearchedListContainer from '../../containers/SearchedListContainer';
import { Redirect } from 'react-router-dom';
import styles from './ContentSearch.css';
import Loader from '../../../Loader/Loader';
import cx from 'classnames';

interface Props {
    addSearchedLocation: (location: string) => Promise<any>;
    getLocation: () => Promise<any>;
}

const ContentSearchPure = ({ addSearchedLocation, getLocation }: Props) => {
    const [location, setLocation] = React.useState<string>('Newcastle');
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>();
    const [isRedirect, setIsRedirect] = React.useState<boolean>(false);

    const handleInputChange = useCallback(
        (event) => {
            setError();
            setLocation(event.target.value);
        },
        [location]
    );

    const handleRedirect = useCallback(() => {
        setIsRedirect(true);
    }, [isRedirect]);

    const handleLocationClick = useCallback(() => {
        setLoading(true);
        return getLocation()
            .then((location: string) => setLocation(location))
            .then(() => setIsRedirect(true))
            .catch(() => setError('Unable to detect current location.'))
            .finally(() => setLoading(false));
    }, []);

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

export default ContentSearchPure;
