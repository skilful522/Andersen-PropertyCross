import apartmentsService from '../../../services/apartmentsService';
import getCoordinates from '../../../services/getCoordinates';

function getLocation() {
    return getCoordinates().then((coordinates) => {
        return apartmentsService({
            centre_point: `${coordinates.latitude},${coordinates.longitude}`,
        }).then((data) => data.locations[0].title);
    });
}

export default getLocation;
