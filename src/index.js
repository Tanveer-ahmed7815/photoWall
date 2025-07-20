import React, {Component} from "react";
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer from './redux/reducer';
import { Provider } from "react-redux";
import App from "./Components/App";
import thunk from "redux-thunk";
import { database } from "./database/config";

/* 
  Redux flow - 
  We have created a store inside Index.js, and used a reducer to populate that store with state in reducer.js,
  We pass that state down as props to our main component and in turen we passed these posts down to Photo component
  as props and used them to generate our photos.
*/
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk))

    /* 
        - BrowserRouter component helps our app to stay aware of changes in the URL.
        - Link component which allows the users to navigate around the application.
        - Route - for every piece of UI, we're going to assign a route, if that route's
          path matches the URL that we're currently on, it'll render that piece of UI, that screen.
    */
ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'));