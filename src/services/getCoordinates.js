function getCoordinates() {
    return new Promise((resolve) => {
        return navigator.geolocation.getCurrentPosition((position) => {
            const coordinate = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            };

            return resolve(coordinate);
        });
    });
}

export default getCoordinates;
