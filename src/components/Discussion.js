import React from 'react';
import Form from './Form'
import Comment from './Comment'
import './Discussion.scss'

const Discussion = ({ commentLog, pushCommentToLog, sortFromNewest, changeSortOrder }) => {
    const comments = commentLog.sort((Comment1, Comment2) => {
        if (Comment1.date[4] < Comment2.date[4]) {
            return (sortFromNewest ? 1 : -1)
        } else {
            return (sortFromNewest ? -1 : 1)
        }
    }).map(comment => (
        <Comment key={comment.id} comment={comment} />
    ))
    return (
        <section className="Discussion">
            <h1>Comments:</h1>
            <button onClick={changeSortOrder}>
                {sortFromNewest ? "From Newest" : "From Oldest"}
            </button>
            <section>
                {comments}
            </section>
            <Form pushCommentToLog={pushCommentToLog} />
        </section>
    );
}

export default Discussion