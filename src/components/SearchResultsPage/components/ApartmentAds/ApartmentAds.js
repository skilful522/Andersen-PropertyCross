import React from 'react';
import styles from './ApartmentAds.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ApartmentAds = ({ image, price, location, id, bedroomNumber, bathroomNumber, summary, title }) => {
    return (
        <Link
            to={{
                pathname: `/results/${location}/${id}`,
                apartmentInfo: { image, price, location, id, bedroomNumber, bathroomNumber, summary, title },
            }}
            className={styles.link}
        >
            <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                    <img src={image} className={styles.image} />
                </div>
                <div className={styles.detail}>
                    <div className={styles.price}>{price}</div>
                    <div className={styles.location}>{location}</div>
                </div>
            </div>
        </Link>
    );
};

ApartmentAds.propTypes = {
    image: PropTypes.string,
    price: PropTypes.string,
    location: PropTypes.string,
    id: PropTypes.number,
    bedroomNumber: PropTypes.number,
    bathroomNumber: PropTypes.number,
    summary: PropTypes.string,
    title: PropTypes.string,
};

export default ApartmentAds;
