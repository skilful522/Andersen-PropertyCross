import React from 'react';
import { shallow } from 'enzyme';
import ApartmentPagePure from '../ApartmentPagePure';

describe('ApartmentPagePure', () => {
    const currentApartment = {};

    const match = {
        params: {
            location: 'London',
        },
    };
    const fetchCurrentApartment = jest.fn().mockResolvedValue(Promise.resolve());
    const getFavoriteList = jest.fn();
    const addApartmentToFavList = jest.fn();
    const removeApartmentFromFavList = jest.fn();
    const wrapper = shallow(
        <ApartmentPagePure
            match={match}
            fetchCurrentApartment={fetchCurrentApartment}
            getFavoriteList={getFavoriteList}
            addApartmentToFavList={addApartmentToFavList}
            removeApartmentFromFavList={removeApartmentFromFavList}
            currentApartment={currentApartment}
        />
    );

    it('should call componentDidMount once', function() {
        expect(fetchCurrentApartment).toHaveBeenCalledTimes(1);
        expect(getFavoriteList).toHaveBeenCalledTimes(1);
    });
    it("change button's text after adding apartment to favorite list", function() {
        const button = wrapper.find('.button').at(0);

        expect(button.text()).toBe('+');
        button.simulate('click');
        expect(addApartmentToFavList).toHaveBeenCalledTimes(1);
    });
});
