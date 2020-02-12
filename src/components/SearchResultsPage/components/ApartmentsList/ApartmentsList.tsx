import React from 'react';
import styles from './ApartmentsList.css';
import Loader from '../../../Loader/Loader';
import ApartmentAds from '../ApartmentAds/ApartmentAds';
import Error from '../../../Error/Error';
import debounce from '../../../../utils/debounce';
import { withRouter } from 'react-router-dom';
import getApartmentId from '../../../../utils/getApartmentId';
import addSearchedLocation from '../../../SearchPage/actions/addSearchedLocation';
import { Match, Apartment } from '../../../../interfaces';

interface Props {
    getApartmentsList: (payload: { city: string; page: number }) => Promise<any>;
    match: Match;
    apartmentsList: Apartment[];
    totalResults: number;
}

type State = {
    loading: boolean;
    currentPage: number;
    error?: string;
};

class ApartmentsList extends React.PureComponent<Props> {
    state: State = {
        loading: false,
        currentPage: 1,
    };

    componentDidMount() {
        this.loadApartments();
    }

    loadApartments = () => {
        this.setState({ loading: true });
        const { getApartmentsList, match } = this.props;
        const { location } = match.params;

        return getApartmentsList({ city: location, page: this.state.currentPage })
            .then(({ payload: { listings } }) => {
                this.setState({ currentPage: this.state.currentPage + 1 });
                if (!listings.length) {
                    this.setState({ error: 'There was a problem with your search' });
                } else {
                    addSearchedLocation(location);
                }
            })
            .catch(() => this.setState({ error: 'There was a problem with your search' }))
            .finally(() => this.setState({ loading: false }));
    };

    loadApartmentsDebounce = debounce(this.loadApartments, 1000);

    render() {
        const { error, loading } = this.state;
        const { apartmentsList, totalResults, match } = this.props;
        const { location } = match.params;

        if (!apartmentsList || loading) {
            return <Loader />;
        }

        if (error) {
            return <Error error={error} />;
        }

        return (
            <div className={styles.wrapper}>
                <h1 className={styles.title}>
                    {apartmentsList.length} of {totalResults} matches
                </h1>

                {apartmentsList.map((apartment) => (
                    <ApartmentAds
                        bedroomNumber={Number(apartment.bedroom_number)}
                        bathroomNumber={Number(apartment.bathroom_number)}
                        summary={apartment.summary}
                        key={apartment.lister_url}
                        image={apartment.thumb_url}
                        id={getApartmentId(apartment.lister_url)}
                        price={apartment.price_formatted}
                        title={apartment.title}
                        location={location}
                    />
                ))}
                <div className={styles.loadMoreWrapper}>
                    {loading && (
                        <button className={styles.button} onClick={this.loadApartmentsDebounce}>
                            Loading...
                            <div>
                                Results for {location} showing {apartmentsList.length} of {totalResults}
                            </div>
                        </button>
                    )}
                    {!loading && (
                        <button className={styles.button} onClick={this.loadApartmentsDebounce}>
                            Load more...
                            <div>
                                Results for {location} showing {apartmentsList.length} of {totalResults}
                            </div>
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

export default withRouter(ApartmentsList);
