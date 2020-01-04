import React from 'react';
import PropTypes from 'prop-types';
import styles from './ApartmentsList.css';
import Loader from '../../../Loader/Loader';
import ApartmentAds from '../ApartmentAds/ApartmentAds';
import Error from '../../../../Error/Error';
import processTitle from '../../../../utils/processTitle';
import debounce from '../../../../utils/debounce';
import { withRouter } from 'react-router-dom';
import getAppartmentId from '../../../../utils/getApartmentId ';

class ApartmentsList extends React.PureComponent {
    state = {
        loading: false,
    };

    componentDidMount() {
        if (!this.props.apartmentsList.length) {
            this.loadApartments();
        }
    }

    loadApartments = () => {
        this.setState({ loading: true });
        const { getApartmentsList, currentPage } = this.props;

        return getApartmentsList({ city: this.props.match.params.location, page: currentPage + 1 })
            .catch((error) => this.setState({ error: error.message }))
            .finally(() => this.setState({ loading: false }));
    };

    loadApartmentsDebounce = debounce(this.loadApartments, 1000);

    render() {
        const { error, loading } = this.state;
        const { apartmentsList, match, totalResults, currentPage } = this.props;
        const { location } = match.params;

        if (!apartmentsList.length) {
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
                        id={getAppartmentId(apartment.lister_url)}
                        price={apartment.price_formatted}
                        title={processTitle(apartment.title)}
                        page={currentPage}
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

ApartmentsList.propTypes = {
    apartmentsList: PropTypes.array,
    getApartmentsList: PropTypes.func,
    currentPage: PropTypes.number,
    match: PropTypes.object,
    totalResults: PropTypes.number,
};

export default withRouter(ApartmentsList);
