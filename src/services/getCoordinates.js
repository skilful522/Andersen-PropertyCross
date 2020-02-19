function getCoordinates() {
    return new Promise((resolve, reject) => {
        return navigator.geolocation.getCurrentPosition((position) => {
            const timeout = setTimeout(() => {
                return reject('Issue with geolocation');
            }, 5000);
            const coordinate = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            };

            return resolve({
                coordinate,
                clearTimeout() {
                    clearTimeout(timeout);
                },
            });
        });
    });
}

export default getCoordinates;
