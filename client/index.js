import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
function tick(){
const element = (<h1>It is {new Date().toLocaleTimeString()}.</h1>);
ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick,1000);
