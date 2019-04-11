import React, { Component } from 'react';
import './Form.scss'

class Form extends Component {
    state = {
        nickname: '',
        comment: '',
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { nickname, comment } = this.state;
        this.props.pushCommentToLog(nickname, comment)
        this.setState({ comment: '' });
    }

    render() {
        const { handleChange, handleSubmit } = this;
        const { comment, nickname } = this.state;
        return (
            <form onSubmit={handleSubmit} className="Form">
                <label>Your nickname: <input name="nickname" value={nickname} onChange={handleChange} type="text" /></label>
                <textarea name="comment" value={comment} onChange={handleChange} placeholder="your comment..."></textarea>
                <button>Add comment</button>
            </form>
        );
    }
}


export default Form;