import React from 'react';
import { NavLink } from 'react-router-dom';
import FavoriteList from './containers/FavoriteList';
import styles from './FavoritesPage.css';

const FavoritesPage = () => {
    return (
        <>
            <div className={styles.searchLinkWrapper}>
                <NavLink exact to="/" className={styles.searchLink}>
                    Search
                </NavLink>
                <h1 className={styles.title}>Your favorites apartments</h1>
            </div>
            <FavoriteList />
        </>
    );
};

export default FavoritesPage;
