import React from 'react';
import { connect } from 'react-redux';
import addSearchedLocation from '../actions/addSearchedLocation';
import ContentSearchPure from '../components/ContentSearch/ContentSearchPure';

const mapDispatchToProps = () => ({
    addSearchedLocation: (location) => addSearchedLocation(location),
});

export default connect(undefined, mapDispatchToProps)(ContentSearchPure);
