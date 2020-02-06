import React from 'react';
import styles from './ApartmentView.css';

interface Props {
    currentApartment: CurrentApartment;
}

const ApartmentView = ({ currentApartment }: Props) => {
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

export default ApartmentView;
