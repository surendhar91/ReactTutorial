import React from 'react';
class App extends React.Component{
  render() {
    const numbers = [1,2,3,4,5];
    return (<NumberList numbers={numbers}/>);
  }
}
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>(
        //everything that's inside the map, should be given key, so that react will efficiently identify the list item added,removed or changed.
        <ListItem key={number.toString()} value={number} />)
        //if you were to return, then use curly braces.
    );
    return (<div><ul>{listItems}</ul></div>);
}
function ListItem(props){
    return (<li>{props.value}</li>);
}
export default App;

