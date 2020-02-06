import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'reset-css';
import SearchPage from '../SearchPage/SearchPage';
import SearchResultsPage from '../SearchResultsPage/SearchResultsPage';
import ApartmentPage from '../ApartmentPage/ApartmentPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={SearchPage} />
                <Route path="/results/:location" exact component={SearchResultsPage} />
                <Route path="/results/:location/:id" exact component={ApartmentPage} />
                <Route path="/favorites" exact component={FavoritesPage} />
            </Switch>
        </Router>
    );
};

export default App;
