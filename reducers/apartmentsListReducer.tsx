const initialState = {
    apartmentsList: [],
    currentPage: 0,
    totalResults: 0,
};

function apartmentsListReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'SEARCH_RESULTS_LIST_UPDATED':
            return {
                ...state,
                apartmentsList: [...state.apartmentsList, ...payload.listings],
                totalResults: payload.total_results,
                currentPage: payload.page,
            };
        default:
            return state;
    }
}

export default apartmentsListReducer;
