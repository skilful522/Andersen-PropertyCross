const initialState = {
    favoriteList: [],
};

function favoriteListReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'UPDATE_FAVORITE_LIST':
            return {
                ...state,
                favoriteList: payload,
            };
        default:
            return state;
    }
}

export default favoriteListReducer;
