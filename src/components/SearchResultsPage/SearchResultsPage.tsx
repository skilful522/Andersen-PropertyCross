import React from 'react';
import ApartmentsListContainer from './containers/ApartmentsListContainer';
import { NavLink } from 'react-router-dom';
import styles from './SearchResultsPage.css';

const SearchResultsPage = () => {
    return (
        <>
            <div className={styles.searchLinkWrapper}>
                <NavLink exact to="/" className={styles.searchLink}>
                    Search
                </NavLink>
            </div>
            <ApartmentsListContainer />
        </>
    );
};

export default SearchResultsPage;
