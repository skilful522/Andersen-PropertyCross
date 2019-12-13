import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'reset-css';
import SearchPage from '../SearchPage/SearchPage';

const App = () => {
    return (
        <Router>
            <SearchPage />
        </Router>
    );
};

export default App;
