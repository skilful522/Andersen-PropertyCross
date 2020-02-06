import getParams from '../getParams';

const defaultParams = {
    encoding: 'json',
    pretty: '1',
    action: 'search_listings',
    country: 'uk',
    listing_type: 'buy',
};

describe('utils/getParams', () => {
    it('Get valid URL when calling getParams with default params', function() {
        expect(getParams(defaultParams)).toBe(
            '?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy'
        );
    });
    it('Get empty string when calling getParams with undefined', function() {
        expect(getParams(undefined)).toBe('');
    });
    it('Get ? when calling getParams with empty object', function() {
        expect(getParams({})).toBe('?');
    });
    it('Get ? when calling getParams with {} where one of the props is undefined', function() {
        expect(getParams({ foo: undefined })).toBe('?');
    });
});
