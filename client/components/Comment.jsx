import React from 'react';
import Avatar from './Avatar.jsx';
class Comment extends React.Component{
    formatDate(date) {//dont prefix function
        return date.toLocaleDateString();
    }
    //export defualt is must, when you import this component elsewhere.
    render() {
        let props = this.props;
        //you can change the inner object value, only the reassignment of object cannot be done.
        return (
            <div className="Comment">
                <UserInfo user={props.author}/>
                <div className="Comment-text">
                    {props.text}
                </div>
                <div className="Comment-date">
                    {this.formatDate(props.date)}
                </div>
            </div>
        );
    }
}
function UserInfo(props){
    return <div className="UserInfo">
        <Avatar user={props.user}/>
        <div className="UserInfo-name">
            {props.user.name}
        </div>
    </div>;
}
export default Comment;


