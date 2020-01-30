import getApartmentId from '../getApartmentId';

const listerUrl =
    'https://www.nestoria.co.uk/detail/0000000112874461820004062/title/5/1-1?serpUid=&pt=1&ot=1&l=newcastle-upon-tyne&did=105_default&t_sec=9&t_or=45&t_pvid=null&utm_source=api&utm_medium=external';

describe('utils/getApartmentId', () => {
    it('Get the ID from the apartments prop lister_url', function() {
        expect(getApartmentId(listerUrl)).toBe('112874461824625111115945');
    });
});
