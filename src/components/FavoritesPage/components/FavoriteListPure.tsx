import React, { Component } from 'react';
import ApartmentAds from '../../SearchResultsPage/components/ApartmentAds/ApartmentAds';
import getApartmentId from '../../../utils/getApartmentId';
import styles from './FavoriteListPure.css';
import Error from '../../Error/Error';

interface Props {
    getFavoriteList: () => Promise<any>,
    favoriteList: Apartment[],
}

class FavoriteListPure extends Component<Props> {
    componentDidMount() {
        this.props.getFavoriteList();
    }

    render() {
        const { favoriteList } = this.props;

        if (favoriteList.length === 0) {
            const errorMessage = 'You have not added any properties to your favourites';

            return <Error error={errorMessage} />;
        }

        return (
            <div className={styles.wrapper}>
                {favoriteList.map((apartment) => (
                    <ApartmentAds
                        bedroomNumber={Number(apartment.bedroom_number)}
                        bathroomNumber={Number(apartment.bathroom_number)}
                        summary={apartment.summary}
                        key={apartment.lister_url}
                        image={apartment.thumb_url}
                        id={getApartmentId(apartment.lister_url)}
                        price={apartment.price_formatted}
                        title={apartment.title}
                        page={Number(apartment.page)}
                        location={apartment.location}
                    />
                ))}
            </div>
        );
    }
}

export default FavoriteListPure;
