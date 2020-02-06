import React from 'react';
import styles from './SearchPage.css';
import Header from './Header/Header';
import SearchContent from './containers/SearchContent';

const SearchPage = () => {
    return (
        <div className={styles.mainWrapper}>
            <Header />
            <SearchContent />
        </div>
    );
};

export default SearchPage;
