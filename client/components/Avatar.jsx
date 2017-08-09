import React from 'react';
export default class Avatar extends React.Component{
    render(){//this.props is must when you use class components
        return (<img className="Avatar"
                src={this.props.user.avatarUrl}
                alt={this.props.user.name}
        />);
    }
}