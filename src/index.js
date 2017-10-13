import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";

////import "jquery";
//import "bootstrap";
//import "bootstrap/dist/css/bootstrap.css";
import configureStore from "./store/CreateStore";
import { Provider } from "react-redux"; //We"ll use the Redux Provider to make the store available to any components that we choose to connect to it.
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import './index.css';
import registerServiceWorker from './registerServiceWorker';


//Containers Start here 
import LoginScreenContainer from "./containers/LoginScreenContainer";
import NavContainer from "./containers/NavContainer";
import ContactsScreenContainer from "./containers/ContactsScreenContainer";
import ChatScreenContainer from "./containers/ChatScreenContainer";

const store = configureStore();

render(
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route component={NavContainer} >
                    <Route path="/" component={LoginScreenContainer} />
                    <Route path="/contacts" component={ContactsScreenContainer} />
                    <Route path="/chat" component={ChatScreenContainer} />

                </Route>
            </Router>
        </Provider>
    , document.getElementsByClassName("fgChatHolder")[0]
);


registerServiceWorker();
