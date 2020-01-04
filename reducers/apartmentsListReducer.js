const initialState = {
    apartmentsList: [],
    totalResults: 0,
};

function apartmentsListReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'SEARCH_RESULTS_LIST_UPDATE':
            return {
                ...state,
                apartmentsList: [...state.apartmentsList, ...payload.listings],
                totalResults: payload.total_results,
                currentPage: payload.page,
            };
        case 'CURRENT_APARTMENT_LOADED':
            return {
                ...state,
                currentApartment: payload,
            };
        default:
            return state;
    }
}

export default apartmentsListReducer;
