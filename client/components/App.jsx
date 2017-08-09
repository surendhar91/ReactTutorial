import React from 'react';
import Comment from './Comment.jsx';
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};
export default class App extends React.Component{
  render() {
    return (<div><Comment date={comment.date} text={comment.text} author={comment.author}/></div>);
  }
}

