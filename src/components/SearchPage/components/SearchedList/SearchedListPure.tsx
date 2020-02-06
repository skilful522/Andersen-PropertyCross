import React, { Component } from 'react';
import styles from './SearchedList.css';

interface Props {
    fetchSearchedList: () => Promise<any>,
    searchedList: string[]
}

class SearchedListPure extends Component<Props> {
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

export default SearchedListPure;
