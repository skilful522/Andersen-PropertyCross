import React from 'react';
import PropTypes from 'prop-types';
import styles from './ApartmentView.css';

const ApartmentView = ({ currentApartment }) => {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.price}>{currentApartment.price_formatted}</div>
            <div className={styles.title}>{currentApartment.title}</div>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={currentApartment.thumb_url} alt="apartment" />
            </div>
            <div className={styles.description}>
                {Number(currentApartment.bedroom_number)} bed, {Number(currentApartment.bathroom_number)} bathrooms
            </div>
            <div className={styles.summary}>{currentApartment.summary}</div>
        </div>
    );
};

ApartmentView.propTypes = {
    currentApartment: PropTypes.object,
};

export default ApartmentView;
