import React from 'react';
class App extends React.Component{
  render() {
    return <Toggle/>;
  }
}
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn:true};
        this.handleClick = this.handleClick.bind(this);//this must be set in constructor, on initial construction of the object
    }
    handleClick(){
        console.log("click event called..changing the state "+this.state.isToggleOn);
        // Parenthesize the body of function to return an object literal expression:
        this.setState(prevState=>({
            isToggleOn : !prevState.isToggleOn
        }));
        //reverse the state based on previous state object.
    }
    render() {
        //once constructed, render method will be called,
        //binding in render method is not recommended, if this handleClick callback is passed as a prop to lower components, those components might do an extra re-rendering.
        return (<button onClick={this.handleClick}>
            {this.state.isToggleOn?'ON':'OFF'}
        </button>);
    }

}
export default App;

