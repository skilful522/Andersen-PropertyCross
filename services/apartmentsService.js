import getParams from '../src/utils/getParams';

const defaultParams = {
    encoding: 'json',
    pretty: '1',
    action: 'search_listings',
    country: 'uk',
    listing_type: 'buy',
    page: '1',
};

const url = 'https://api.nestoria.co.uk/api';

function validateResponseCode(data) {
    const responseCode = Number(data.response.application_response_code);
    const validateCodes = [100, 101, 110];

    return validateCodes.some((code) => responseCode === code);
}

function apartmentsService(location) {
    const params = { ...defaultParams, ...location };

    return fetch(url + getParams(params))
        .then((response) => response.json())
        .then((data) => {
            if (validateResponseCode(data)) {
                return data;
            }
            throw new Error('There was a problem with your search');
        });
}

export default apartmentsService;
