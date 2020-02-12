import { connect } from 'react-redux';
import getApartmentsList from '../actions/getApartmentsList';
import ApartmentsList from '../components/ApartmentsList/ApartmentsList';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import selectCityInfo from '../../../selectors/apartmentsList/selectCityInfo';

const mapStateToProps = ({ apartmentsListReducer }, props) => {
    const { location } = props.match.params;
    const { apartmentsList, totalResults } = selectCityInfo(apartmentsListReducer, location);

    return {
        apartmentsList,
        totalResults,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getApartmentsList: (payload) => dispatch(getApartmentsList(payload)),
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ApartmentsList);
