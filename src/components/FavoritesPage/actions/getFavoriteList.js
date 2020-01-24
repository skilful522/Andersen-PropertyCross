import getLocalStorage from '../../../../services/getLocalStorage';

function getFavoriteList() {
    return (dispatch) => {
        return getLocalStorage('favoriteList').then((payload) => {
            return dispatch({ type: 'UPDATE_FAVORITE_LIST', payload });
        });
    };
}

export default getFavoriteList;
