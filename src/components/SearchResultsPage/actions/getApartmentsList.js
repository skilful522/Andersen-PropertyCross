import apartmentsService from '../../../services/apartmentsService';

function getApartmentsList({ city, page }) {
    return (dispatch) => {
        return apartmentsService({ place_name: city, page }).then((payload) => {
            return dispatch({
                type: 'SEARCH_RESULTS_LIST_UPDATED',
                payload: { ...payload, city },
            });
        });
    };
}

export default getApartmentsList;
