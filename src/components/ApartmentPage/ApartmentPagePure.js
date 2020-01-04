import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './ApartmentPage.css';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import ApartmentView from './ApartmentView';
import Loader from '../Loader/Loader';

class ApartmentPagePure extends PureComponent {
    componentDidMount() {
        const { getFavoriteList, match, fetchCurrentApartment } = this.props;
        const { location, page, id } = match.params;

        fetchCurrentApartment({ location, page, id });
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

ApartmentPagePure.propTypes = {
    getFavoriteList: PropTypes.func,
    fetchCurrentApartment: PropTypes.func,
    addApartmentToFavList: PropTypes.func,
    removeApartmentFromFavList: PropTypes.func,
    match: PropTypes.object,
    isAdded: PropTypes.bool,
    currentApartment: PropTypes.object,
};

export default ApartmentPagePure;
