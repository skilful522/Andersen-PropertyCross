import setLocaleStorage from '../../../../services/setLocalStorage';
import getLocalStorage from '../../../../services/getLocalStorage';

function removeApartmentFromFavList(payload) {
    return (dispatch) => {
        return getLocalStorage('favoriteList').then((list) => {
            const favoriteList = list.filter((apartment) => apartment.id !== payload.id);

            return setLocaleStorage('favoriteList', favoriteList).then(() => {
                return dispatch({
                    type: 'UPDATE_FAVORITE_LIST',
                    payload: favoriteList,
                });
            });
        });
    };
}

export default removeApartmentFromFavList;
