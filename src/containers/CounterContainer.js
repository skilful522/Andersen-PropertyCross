import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter/Counter';

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);
