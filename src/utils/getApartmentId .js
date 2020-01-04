const getApartmentId = (imgUrl) => imgUrl.replace(/[^1-9]/g, '');

export default getApartmentId;
