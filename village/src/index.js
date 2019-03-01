import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, withRouter} from 'react-router-dom';

import './css/index.css';
import App from './App';



const AppWithRouter = withRouter(App);
ReactDOM.render(
<BrowserRouter>
    <AppWithRouter />
</BrowserRouter>, document.getElementById('root'));
