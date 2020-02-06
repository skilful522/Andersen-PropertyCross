const initialState = {
    searchedList: [],
};

function searchedListReducer(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_LIST_UPDATE':
            return { ...state, searchedList: action.payload };
        default:
            return state;
    }
}

export default searchedListReducer;
