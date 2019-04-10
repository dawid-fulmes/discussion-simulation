import React from 'react';
import './Comment.scss'

const Comment = ({ comment }) => {
    return (
        <div>
            <div>{comment.photo}</div>
            <div>{comment.nickname}</div>
            <div>{comment.content}</div>
        </div>
    );
}

export default Comment