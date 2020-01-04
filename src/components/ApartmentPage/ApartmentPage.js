import React from 'react';
import { connect } from 'react-redux';
import ApartmentPagePure from './ApartmentPagePure';
import getFavoriteList from './actions/getFavoriteList';
import { includes } from 'ramda';
import addApartmentToFavList from './actions/addApartmentToFavList';
import removeApartmentFromFavList from './actions/removeApartmentFromFavList';
import fetchCurrentApartment from './actions/fetchCurrentApartment';

function checkApartmentInFavorite(favoriteListReducer, currentApartmentId) {
    const { favoriteList } = favoriteListReducer;
    const currentApartment = favoriteList.find((favoriteApartment) => favoriteApartment.id === currentApartmentId);

    return includes(currentApartment, favoriteList);
}

const mapStateToProps = ({ favoriteListReducer, apartmentsListReducer }, props) => {
    const { id } = props.match.params;

    return {
        isAdded: checkApartmentInFavorite(favoriteListReducer, id),
        currentApartment: apartmentsListReducer.currentApartment,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getFavoriteList: () => dispatch(getFavoriteList()),
    fetchCurrentApartment: (payload) => dispatch(fetchCurrentApartment(payload)),
    addApartmentToFavList: (payload) => dispatch(addApartmentToFavList(payload)),
    removeApartmentFromFavList: (payload) => dispatch(removeApartmentFromFavList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentPagePure);
