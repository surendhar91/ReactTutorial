import React from 'react';
class App extends React.Component {
    render() {
        return (<div><Calculator /></div>)
    }
}
const scaleNames = {
    c: 'Celcius',
    f: 'Fahrenheit'
};
class Calculator extends React.Component {

    render() {
        return (<div><TemperatureInput scale="c"/>
            <TemperatureInput scale="f"/></div>);
    }
}
class TemperatureInput extends React.Component {

    constructor(props){
        super(props);
        this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
        this.state = {temperature:''};
    }

    handleTemperatureChange(e){
        this.setState({temperature:e.target.value});
    }

    render() {
        let scale = this.props.scale;
        let temperature = this.state.temperature;
        return (<fieldset>
            <label>Enter temperature in {scaleNames[scale]}:</label>
            <input name={scaleNames[scale]} value={temperature} onChange={this.handleTemperatureChange}/>
        </fieldset>);
    }
}
export default App;

