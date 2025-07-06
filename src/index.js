import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Main from './Components/Main'
import './styles/stylesheet.css';
import { BrowserRouter } from "react-router-dom";

    /* 
        - BrowserRouter component helps our app to stay aware of changes in the URL.
        - Link component which allows the users to navigate around the application
    */
ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>,document.getElementById('root'));