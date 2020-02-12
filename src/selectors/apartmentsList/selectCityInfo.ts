import { pathOr } from 'ramda';

export default function selectCityInfo(apartmentsListReducer, location) {
    const { apartmentsList, totalResults } = pathOr(
        { apartmentsList: [], totalResults: 0 },
        [location],
        apartmentsListReducer
    );

    return {
        apartmentsList,
        totalResults,
    };
}
