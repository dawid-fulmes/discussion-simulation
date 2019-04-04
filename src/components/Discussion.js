import React from 'react';
import Form from './Form'
import './Discussion.scss'

const Discussion = ({ commentLog }) => {
    const comments = commentLog.map(comment => (
        <div>
            <br />
            <div>{comment.body}</div>
            <br />
        </div>
    ))
    return (
        <section className="discussion">
            <section>
                {comments}
            </section>
            <Form />
        </section>
    );
}

export default Discussion