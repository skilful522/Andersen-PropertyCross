function getParams(params) {
    if (params) {
        return `?${Object.keys(params)
            .map((key) => (params[key] ? `${key}=${params[key]}` : ''))
            .filter(Boolean)
            .join('&')}`;
    }
    return '';
}

export default getParams;
