import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter/Counter';
import PropTypes from 'prop-types';

const CounterContainer = (props) => {
    return <Counter increment={props.onIncrement} count={props.count} />;
};

const mapStateToProps = (store) => {
    return {
        count: store.counter.count,
    };
};

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
});

CounterContainer.propTypes = {
    onIncrement: PropTypes.func,
    count: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
