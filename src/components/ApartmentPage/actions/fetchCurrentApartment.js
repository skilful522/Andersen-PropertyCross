import apartmentsService from '../../../../services/apartmentsService';
import getApartmentId from '../../../utils/getApartmentId';

function fetchCurrentApartment({ id, location, page }) {
    return (dispatch) => {
        function recursiveSearch(id, location, page) {
            return apartmentsService({ place_name: location, page }).then(({ listings }) => {
                const currentApartment = listings.find((apartment) => {
                    return getApartmentId(apartment.lister_url) === id;
                });

                if (currentApartment) {
                    return dispatch({
                        type: 'CURRENT_APARTMENT_LOADED',
                        payload: { ...currentApartment, id, location },
                    });
                }
                return recursiveSearch(id, location, page + 1);
            });
        }
        return recursiveSearch(id, location, page);
    };
}

export default fetchCurrentApartment;
