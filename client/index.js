import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
//components are like javascript functions accept arbitrary inputs (called props) and return react elements describing what should appear on the screen.
function Welcome(props){
    return <h2>Hello, {props.name}</h2>;
}

function tick() {
    const element = (<h1>It is {new Date().toLocaleTimeString()}.</h1>);
    ReactDOM.render(<WelcomeApp />, document.getElementById('root'));
}
function WelcomeApp(){
    //components must return a single root element, this is why we added a div tag here
    return (
        <div>
            <Welcome name="surendhar"/>
            <Welcome name="sindhu"/>
            <Welcome name="suganya"/>
        </div>
    );
}
setInterval(tick, 1000);
