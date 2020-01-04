import apartmentsService from '../../../../services/apartmentsService';

function getApartmentsList(payload) {
    return (dispatch) => {
        return apartmentsService({ place_name: payload.city, page: payload.page }).then((payload) => {
            return dispatch({
                type: 'SEARCH_RESULTS_LIST_UPDATE',
                payload,
            });
        });
    };
}

export default getApartmentsList;
