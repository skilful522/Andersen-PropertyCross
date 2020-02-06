import React from 'react';
import { connect } from 'react-redux';
import SearchedListPure from '../components/SearchedList/SearchedListPure';
import fetchSearchedList from '../actions/fetchSearchedList';

const mapStateToProps = ({ searchedListReducer }) => {
    return { searchedList: searchedListReducer.searchedList };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSearchedList: () => dispatch(fetchSearchedList()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchedListPure);
