import getLocalStorage from '../../../../services/getLocalStorage';
import setLocaleStorage from '../../../../services/setLocalStorage';
import { includes } from 'ramda';

function addApartmentToFavList(apartment) {
    return (dispatch) => {
        return getLocalStorage('favoriteList').then((favoriteList) => {
            if (!includes(apartment, favoriteList)) {
                return setLocaleStorage('favoriteList', [...favoriteList, apartment]).then(() => {
                    return dispatch({
                        type: 'FAVORITE_LIST_UPDATED',
                        payload: [...favoriteList, apartment],
                    });
                });
            }
        });
    };
}

export default addApartmentToFavList;
