import getLocalStorage from '../../../../services/getLocalStorage';

function fetchSearchedList() {
    return (dispatch) => {
        return getLocalStorage('searchedList').then((payload) => dispatch({ type: 'SEARCH_LIST_UPDATE', payload }));
    };
}

export default fetchSearchedList;
