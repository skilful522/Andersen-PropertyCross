const initialState = {};

function apartmentsListReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'SEARCH_RESULTS_LIST_UPDATED':
            return {
                ...state,
                [payload.city]: {
                    apartmentsList: [...payload.listings],
                    totalResults: payload.total_results,
                },
            };
        default:
            return state;
    }
}

export default apartmentsListReducer;
