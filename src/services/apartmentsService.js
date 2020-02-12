import getParams from '../utils/getParams';

const defaultParams = {
    encoding: 'json',
    pretty: '1',
    action: 'search_listings',
    country: 'uk',
    listing_type: 'buy',
};

const url = 'https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api';

function validateResponseCode(data) {
    const responseCode = Number(data.response.application_response_code);
    const validateCodes = [100, 101, 110, 200, 202];

    return validateCodes.some((code) => responseCode === code);
}

function apartmentsService(payload) {
    const params = { ...defaultParams, ...payload };

    return fetch(url + getParams(params))
        .then((response) => response.json())
        .then((data) => {
            if (validateResponseCode(data)) {
                return data.response;
            }
            throw new Error('There was a problem with your search');
        });
}

export default apartmentsService;
