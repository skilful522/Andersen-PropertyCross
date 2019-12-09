import React, { Component } from 'react';
import styles from './App.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import CounterContainer from '../../containers/CounterContainer';
import 'reset-css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1 className={styles.title}>My React App!</h1>
                    <CounterContainer />
                </div>
                <Switch>
                    <Route exact path="/" render={() => <div>Home</div>} />
                    <Route exact path="/feed" render={() => <div>Feed</div>} />
                    <Route exact path="/news" render={() => <div>News</div>} />
                    <Route component={NotFoundPage} />
                </Switch>

                <NavLink exact to="/" activeClassName={styles.active} className={styles.homeLink}>
                    home
                </NavLink>

                <NavLink exact to="/feed" activeClassName={styles.active} className={styles.feedLink}>
                    feed
                </NavLink>

                <NavLink exact to="/news" activeClassName={styles.active} className={styles.newsLink}>
                    news
                </NavLink>
            </Router>
        );
    }
}

export default App;
