import React from 'react';
import { shallow } from 'enzyme';
import SearchedListPure from '../components/SearchedList/SearchedListPure';

describe('SearchedListPure', () => {
    const fetchSearchedList = jest.fn().mockResolvedValue(Promise.resolve());
    const searchedList = [];

    shallow(<SearchedListPure fetchSearchedList={fetchSearchedList} searchedList={searchedList} />);

    it('should call componentDidMount once', function() {
        expect(fetchSearchedList).toHaveBeenCalledTimes(1);
    });
});
