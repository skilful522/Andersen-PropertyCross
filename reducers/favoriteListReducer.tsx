const initialState = {
    favoriteList: [],
};

function favoriteListReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'FAVORITE_LIST_UPDATED':
            return {
                ...state,
                favoriteList: payload,
            };
        default:
            return state;
    }
}

export default favoriteListReducer;
