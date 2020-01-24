import { connect } from 'react-redux';
import getApartmentsList from '../actions/getApartmentsList';
import ApartmentsList from '../components/ApartmentsList/ApartmentsList';

const mapStateToProps = ({ apartmentsListReducer: { apartmentsList, totalResults, currentPage } }) => {
    return {
        apartmentsList,
        totalResults,
        currentPage,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getApartmentsList: (payload) => dispatch(getApartmentsList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentsList);
