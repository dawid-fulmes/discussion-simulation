import React from 'react';
import Form from './Form'
import Comment from './Comment'
import './Discussion.scss'

const Discussion = ({ commentLog }) => {
    const comments = commentLog.map(comment => (
        <Comment key={comment.id} comment={comment} />
    ))
    return (
        <section className="Discussion">
            <h1>Comments:</h1>
            <section>
                {comments}
            </section>
            <Form />
        </section>
    );
}

export default Discussion