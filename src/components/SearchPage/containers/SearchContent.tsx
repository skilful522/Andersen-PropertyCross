import React from 'react';
import { connect } from 'react-redux';
import addSearchedLocation from '../actions/addSearchedLocation';
import ContentSearchPure from '../components/ContentSearch/ContentSearchPure';
import getLocation from '../actions/getLocation';

const mapDispatchToProps = () => ({
    addSearchedLocation: (location) => addSearchedLocation(location),
    getLocation: () => getLocation(),
});

export default connect(undefined, mapDispatchToProps)(ContentSearchPure);
