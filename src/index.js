import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Main from './Components/Main'
import './styles/stylesheet.css';
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from './redux/reducer'

const store = createStore(rootReducer)

    /* 
        - BrowserRouter component helps our app to stay aware of changes in the URL.
        - Link component which allows the users to navigate around the application.
        - Route - for every piece of UI, we're going to assign a route, if that route's
          path matches the URL that we're currently on, it'll render that piece of UI, that screen.
    */
ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>,document.getElementById('root'));