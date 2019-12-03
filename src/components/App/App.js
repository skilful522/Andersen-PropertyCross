import React, { Component } from 'react';
import styles from './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import FeedPage from '../FeedPage/FeedPage';
import NewsPage from '../NewsPage/NewsPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import CounterContainer from '../../containers/CounterContainer';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1 className={styles.title}>My React App!</h1>
                    <CounterContainer />
                </div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/feed" component={FeedPage} />
                    <Route exact path="/news" component={NewsPage} />
                    <Route component={NotFoundPage} />
                </Switch>
                <NavBar />
            </Router>
        );
    }
}

export default App;
