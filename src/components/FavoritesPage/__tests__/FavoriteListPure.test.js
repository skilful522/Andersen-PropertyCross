import React from 'react';
import { shallow } from 'enzyme';
import FavoriteListPure from '../components/FavoriteListPure';

describe('FavoriteListPure', () => {
    const getFavoriteList = jest.fn().mockResolvedValue(Promise.resolve());
    const favoriteList = [];

    shallow(<FavoriteListPure getFavoriteList={getFavoriteList} favoriteList={favoriteList} />);

    it('should call componentDidMount once', () => {
        expect(getFavoriteList).toHaveBeenCalledTimes(1);
    });
});
