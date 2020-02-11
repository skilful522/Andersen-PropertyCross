import React from 'react';
import { shallow } from 'enzyme';
import ContentSearchPure from '../components/ContentSearch/ContentSearchPure';

describe('ContentSearchPure', function() {
    let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');

    useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(() => {
        wrapper = shallow(<ContentSearchPure />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('updates input field in state', () => {
        const location = 'York';

        wrapper.find('.searchInput').simulate('change', {
            target: {
                value: location,
            },
        });
        expect(setState).toHaveBeenCalledWith('York');
    });
});
