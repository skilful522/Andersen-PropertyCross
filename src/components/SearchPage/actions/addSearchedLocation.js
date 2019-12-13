import apartmentsService from '../../../../services/apartmentsService';
import setLocaleStorage from '../../../../services/setLocalStorage';
import getLocalStorage from '../../../../services/getLocalStorage';

function addSearchedLocation(location) {
    return apartmentsService({ place_name: location }).then(() => {
        return getLocalStorage('searchedList').then((searchedList) => {
            return setLocaleStorage('searchedList', [location, ...searchedList.filter((city) => city !== location)]);
        });
    });
}

export default addSearchedLocation;
