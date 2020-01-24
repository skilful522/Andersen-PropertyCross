const initialState = {};

function currentApartmentReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'CURRENT_APARTMENT_LOADED':
            return {
                ...state,
                [payload.id]: payload,
            };
        default:
            return state;
    }
}

export default currentApartmentReducer;
