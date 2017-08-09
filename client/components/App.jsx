import React from 'react';
class App extends React.Component {
    render() {
        return (<Reservation/>)
    }
}
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type == 'checkbox'? target.checked:target.value;
        const name  = target.name;
        this.setState({[name]: value});//compute the target name on the fly.
    }

    render() {
        return (
            <form>
                Is going:<input name="isGoing" checked={this.state.isGoing} type="checkbox"
                                onChange={this.handleInputChange}/>
                Number of guests:<input name="numberOfGuests" type="text" value={this.state.numberOfGuests}
                                        onChange={this.handleInputChange}/>
            </form>
        );
    }
}
export default App;

