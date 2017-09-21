import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";

import { Router, Route, IndexRoute, hashHistory } from "react-router";
import "jquery";
//import "bootstrap";
//import "bootstrap/dist/css/bootstrap.css";
import configureStore from "./Store/CreateStore";
import { Provider } from "react-redux"; //We"ll use the Redux Provider to make the store available to any components that we choose to connect to it.

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
    <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={App} />
            </Route>
        </Router>

    </Provider>, document.getElementsByClassName("fgChatHolder")[0]
);


registerServiceWorker();
