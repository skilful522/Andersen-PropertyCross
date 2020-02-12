import getLocalStorage from '../../../services/getLocalStorage';

function getFavoriteList() {
    return (dispatch) => {
        return getLocalStorage('favoriteList').then((payload) => {
            return dispatch({ type: 'FAVORITE_LIST_UPDATED', payload });
        });
    };
}

export default getFavoriteList;
