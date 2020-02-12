import React from 'react';
import styles from './ApartmentAds.css';
import { Link } from 'react-router-dom';

interface Props {
    image: string;
    price: string;
    location: string;
    id: string;
    bedroomNumber: number;
    bathroomNumber: number;
    summary: string;
    title: string;
}

const ApartmentAds = ({ image, price, location, id, bedroomNumber, bathroomNumber, summary, title }: Props) => {
    return (
        <Link
            to={{
                pathname: `/results/${location}/${id}`,
            }}
            className={styles.link}
        >
            <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                    <img src={image} className={styles.image} />
                </div>
                <div className={styles.detail}>
                    <div className={styles.price}>{price}</div>
                    <div className={styles.location}>{title}</div>
                </div>
            </div>
        </Link>
    );
};

export default ApartmentAds;
