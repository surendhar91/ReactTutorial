import React from 'react';
class App extends React.Component {
    render() {
        return (<div><SignUpDialog /></div>)
    }
}
function FancyBorder(props){
    //all the elements inside <FancyBorder></FancyBorder> are called as children.
    //if we want we can also call like this <FancyBorder left = {<Contacts/>} right = {<Chat />} />
    return (<div className={"FancyBorder FancyBorder-"+ props.color}>
            {props.children}
    </div>
    );
}
function Dialog(props){
    return (<div><FancyBorder color="blue">
        <h1 className="Dialog-title">
            {props.title}
        </h1>
        <p className="Dialog-message">
            {props.message}
        </p>
        {props.children}
    </FancyBorder></div>);
}
class SignUpDialog extends React.Component{
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.state = {loginName:''};
    }

    handleInputChange(event){
        const value = event.target.value;
        this.setState({loginName:value});
    }

    handleOnSubmit(){
        if(this.state.loginName!='') {
            alert('Welcome onboard,  '+this.state.loginName);
        }else{
            alert("Enter login name!")
        }
    }

    render(){
        return (<Dialog title="Mars Exploration Program" message="How should we refer to you?">
            <input type="text" value={this.state.loginName} onChange={this.handleInputChange} />
            <button name="Sign Me Up!" onClick={this.handleOnSubmit}>Sign Me Up!</button>
        </Dialog>);
    }
}
export default App;

