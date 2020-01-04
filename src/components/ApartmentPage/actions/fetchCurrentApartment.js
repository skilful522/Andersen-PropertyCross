import apartmentsService from '../../../../services/apartmentsService';
import getApartmentId from '../../../utils/getApartmentId ';

function fetchCurrentApartment(payload) {
    const { location, page, id } = payload;

    return (dispatch) => {
        return apartmentsService({ place_name: location, page }).then(({ listings }) => {
            const currentApartment = listings.find((apartment) => {
                return getApartmentId(apartment.lister_url) === id;
            });

            return dispatch({
                type: 'CURRENT_APARTMENT_LOADED',
                payload: { ...currentApartment, id },
            });
        });
    };
}
export default fetchCurrentApartment;
