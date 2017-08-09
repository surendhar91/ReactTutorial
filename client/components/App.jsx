import React from 'react';
class App extends React.Component{
  render() {
    return <Clock/>;
  }
}
class Clock extends React.Component{
    //Goal: timer code has to be added in this clock component itself.
    constructor(props){
        super(props);//should always be called first.
        this.state = {date:new Date()};
    }

    componentDidMount(){
        //this.state and this.props are provided by react as default,
        //however we can add member variables as long as they are not displayed in the ui
        this.timerID = setInterval(()=>{this.tick()},1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({date:new Date()});//changing the state, whenever a state is changed, render method will be called
        //a virtual component will be constructed in virtual dom and checked against the real dom, taking the diff and updating in the ui
    }

    render() {
        /*get the date from state object(props is a ead only date)*/
        //pass the child component, state's date..
        return (<div>
            <h1>Hello,World!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>);
    }
}
export default App;

