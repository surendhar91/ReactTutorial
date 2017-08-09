import React from 'react';
import Comment from './Comment.jsx';
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    },
    test: ()=>{
      console.log("Render function called..")
    },
    callBack: (logger) => {
        logger.log("surendhar");
    }
};// comment is an instance (javascript object)
var properties = class properties{//named class expresions
    constructor(name, callBackFunc){
        this.name = name;
        this.callBackFunc = callBackFunc;
    }
}
var Model = class{//unnamed class expressions.
    constructor(properties){
        this.properties = properties;
    }
    toObject(){
        return this.properties;
    }
    get string(){
        this.properties.callBackFunc();
        return this.properties.name;
    }
}
//object creating an instance of the Model class.
var jack = new Model(new properties("jack", ()=>{console.log("call back function initiated.")}));
class App extends React.Component{
  render() {
      comment.test();
      console.log(jack.string);
    return (<div><Comment date={comment.date} text={comment.text} author={comment.author}/></div>);
  }
}
export default App;

