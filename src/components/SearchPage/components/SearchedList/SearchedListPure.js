import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchedList.css';

class SearchedListPure extends Component {
    componentDidMount() {
        this.props.fetchSearchedList();
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.contentWrapper}>
                    <h3 className={styles.heading}>Recent searches:</h3>
                    <ul className={styles.content}>
                        {this.props.searchedList.map((item) => (
                            <li key={item} className={styles.contentItem}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

SearchedListPure.propTypes = {
    searchedList: PropTypes.array,
    fetchSearchedList: PropTypes.func,
};

export default SearchedListPure;
