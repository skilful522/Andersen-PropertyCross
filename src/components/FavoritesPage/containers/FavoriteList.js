import { connect } from 'react-redux';
import FavoriteListPure from '../components/FavoriteListPure';
import getFavoriteList from '../actions/getFavoriteList';

const mapStateToProps = ({ favoriteListReducer: { favoriteList } }) => {
    return { favoriteList };
};

const mapDispatchToProps = (dispatch) => ({
    getFavoriteList: () => dispatch(getFavoriteList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteListPure);
