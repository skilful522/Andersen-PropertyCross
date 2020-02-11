import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header/Header';

describe('Header', function() {
    let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');

    useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should redirect on click', function() {
        wrapper
            .find('button')
            .props()
            .onClick();
        expect(setState).toHaveBeenCalledWith(true);
    });
});
