import debounce from '../debounce';

describe('utils/debounce', () => {
    jest.useFakeTimers();

    const click = jest.fn();
    const debounceFunction = debounce(click, 1000);

    it('execute just once', function() {
        for (let i = 0; i < 100; i++) {
            debounceFunction();
        }

        jest.runAllTimers();

        expect(click).toBeCalledTimes(1);
    });
});
