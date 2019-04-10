import React from 'react';
import './Comment.scss'

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <div className="photo"><img src={comment.photo} alt={`avatar of ${comment.nickname}`} /></div>
            <div className="nickname">{comment.nickname}</div>
            <div className="content">{comment.content}</div>
        </div>
    );
}

export default Comment