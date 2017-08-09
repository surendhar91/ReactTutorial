import React from 'react';
class App extends React.Component{
  render() {
    return <LoginControl/>;
  }
}
class LoginControl extends React.Component{
    //Based on state/condition, show this component. Have this logic in LoginControl
    constructor(props){
        super(props);
        this.state = {isLoggedIn:false};
        this.handleLoginAction = this.handleLoginAction.bind(this);
        this.handleLogoutAction = this.handleLogoutAction.bind(this);
    }
    handleLoginAction(){
        this.setState({isLoggedIn:true});
    }

    handleLogoutAction(){
        this.setState({isLoggedIn:false});
    }
    render(){
        let button = null;
        let isLoggedIn = this.state.isLoggedIn;
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutAction}/>;//you shouldn't call the function
            //passing the onclick action to lower level components.
        }else{
            button = <LoginButton onClick={this.handleLoginAction}/>;
        }
        return (<div><Greeting isLoggedIn={isLoggedIn}/>{button}</div>);
    }

}
function LoginButton(props){
    return (<button onClick={props.onClick}>Login</button>);
}
function LogoutButton(props){
    return (<button onClick={props.onClick}>Logout</button>);
}
function Greeting(props){
    let greeting = null;
    if(props.isLoggedIn){
        greeting = <UserGreeting />;
    }else{
        greeting = <GuestGreeting />;
    }
    return greeting;
}
//conditional components
function UserGreeting(props){
    return <h1>Welcome Back!</h1>;
}
function GuestGreeting(props){
    return <h1>Please Sign up</h1>;
}
export default App;

