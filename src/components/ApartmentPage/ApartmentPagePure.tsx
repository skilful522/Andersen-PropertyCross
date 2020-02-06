import React, { PureComponent } from 'react';
import styles from './ApartmentPage.css';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import Loader from '../Loader/Loader';
import ApartmentView from './ApartmentView';

interface Props {
    getFavoriteList: () => Promise<any>,
    currentApartment: CurrentApartment,
    match: Match,
    fetchCurrentApartment: (payload: FetchCurrentApartment) => Promise<any>,
    addApartmentToFavList: (currentApartment:CurrentApartment) => Promise<any>,
    removeApartmentFromFavList: (currentApartment: CurrentApartment) => Promise<any>,
    isAdded: boolean,
}

class ApartmentPagePure extends PureComponent<Props> {
    componentDidMount() {
        const { getFavoriteList, match, fetchCurrentApartment } = this.props;
        const { id, location } = match.params;

        fetchCurrentApartment({ id, location, page: 1 });
        getFavoriteList();
    }

    handleAddOnClick = () => {
        this.props.addApartmentToFavList(this.props.currentApartment);
    };

    handleRemoveOnClick = () => {
        this.props.removeApartmentFromFavList(this.props.currentApartment);
    };

    render() {
        const {
            isAdded,
            currentApartment,
            match: {
                params: { location },
            },
        } = this.props;

        if (!currentApartment) {
            return <Loader />;
        }

        return (
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.navbar}>
                        <div className={styles.searchResultsLinkWrapper}>
                            <NavLink exact to={`/results/${location}`} className={styles.link}>
                                Search Results
                            </NavLink>
                            <NavLink exact to="/favorites" className={styles.link}>
                                Favourites
                            </NavLink>
                        </div>
                        <div className={styles.titleWrapper}>
                            <div className={styles.pageTitle}>Property Details</div>
                            <div className={styles.favButtonWrapper}>
                                {isAdded && (
                                    <button
                                        className={cx(styles.favoritesButton, styles.button)}
                                        onClick={this.handleRemoveOnClick}
                                    >
                                        -
                                    </button>
                                )}
                                {!isAdded && (
                                    <button
                                        className={cx(styles.favoritesButton, styles.button)}
                                        onClick={this.handleAddOnClick}
                                    >
                                        +
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <ApartmentView currentApartment={currentApartment} />
            </div>
        );
    }
}


export default ApartmentPagePure;
