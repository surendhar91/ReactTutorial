import React from 'react';
import Avatar from './Avatar.jsx';
function formatDate(date) {
    return date.toLocaleDateString();
}
export default function Comment(props){
    //export defualt is must, when you import this component elsewhere.
    return (
        <div className="Comment">
            <div className="UserInfo">
                <Avatar user={props.author} />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}


