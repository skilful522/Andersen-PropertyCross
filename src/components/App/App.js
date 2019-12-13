import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'reset-css';
import SearchPage from '../SearchPage/SearchPage';
import SearchResultsPage from '../SearchResultsPage/SearchResultsPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={SearchPage} />
                <Route path="/results/:location" exact component={SearchResultsPage} />
            </Switch>
        </Router>
    );
};

export default App;
