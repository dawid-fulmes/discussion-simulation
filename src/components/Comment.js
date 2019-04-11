import React from 'react';
import './Comment.scss'

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <div className="photo">
                <img src={comment.photo} alt={`avatar of ${comment.nickname}`} />
            </div>
            <div className="nickname">{comment.nickname}</div>
            <div className="date">
                <div>
                    {comment.date[0]}
                </div>
                <div>
                    {comment.date[1] < 10 ? `0${comment.date[1]}` : comment.date[1]}:
                    {comment.date[2] < 10 ? `0${comment.date[2]}` : comment.date[2]}:
                    {comment.date[3] < 10 ? `0${comment.date[3]}` : comment.date[3]}
                </div>
            </div>
            <div className="content">{comment.content}</div>
        </div>
    );
}

export default Comment