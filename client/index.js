import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {BrowserRouter} from 'react-router-dom';
//components are like javascript functions accept arbitrary inputs (called props) and return react elements describing what should appear on the screen.
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
