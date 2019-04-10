import React from 'react';
import './Comment.scss'

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <div>{comment.photo}</div>
            <div>{comment.nickname}</div>
            <div>{comment.content}</div>
        </div>
    );
}

export default Comment