import React from 'react';
import { shallow } from 'enzyme';
import ApartmentsList from '../components/ApartmentsList/ApartmentsList';

describe('ApartmentsList', () => {
    const match = {
        params: {
            location: 'Newcastle',
        },
    };
    const currentPage = 0;
    const getApartmentsList = jest.fn().mockResolvedValue(Promise.resolve());
    const apartmentsList = [];

    shallow(
        <ApartmentsList.WrappedComponent
            apartmentsList={apartmentsList}
            match={match}
            getApartmentsList={getApartmentsList}
            currentPage={currentPage}
        />
    );

    it('should call componentDidMount once', () => {
        expect(getApartmentsList).toHaveBeenCalledTimes(1);
    });
});
