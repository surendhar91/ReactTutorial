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
    //Move the state up
    constructor(props) {
        super(props);
        this.state = {temperature: '', scale: 'c'}
        this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
    }

    handleTemperatureChange(e) {
        let name = e.target.name;
        this.setState({temperature: e.target.value, scale: name});
    }


    render() {
        let scale = this.state.scale;
        let temperature = this.state.temperature;
        const celsius = (scale=='f')?this.tryConvert(temperature, this.toCelsius):temperature;
        const fahrenhit = (scale=='c')?this.tryConvert(temperature, this.toFahrenheit):temperature;
        return (<div>
            <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleTemperatureChange} />
            <TemperatureInput scale='f' temperature={fahrenhit} onTemperatureChange={this.handleTemperatureChange} />
            <BoilingVerdict celsius = {celsius} />
        </div>);
    }

    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }
}
class TemperatureInput extends React.Component {


    render() {
        let scale = this.props.scale;
        let temperature = this.props.temperature;
        let onTemperatureChange = this.props.onTemperatureChange;
        return (<fieldset>
            <label>Enter temperature in {scaleNames[scale]}:</label>
            <input name={scale} value={temperature} onChange={onTemperatureChange}/>
        </fieldset>);
    }
}
function BoilingVerdict(props){
    if(props.celsius>=100){
        return <p>The water would boil</p>;
    }
    return <p>The water would not boil</p>;
}
export default App;

