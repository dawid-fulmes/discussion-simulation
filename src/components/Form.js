import React, { Component } from 'react';
import './Form.scss'

class Form extends Component {
    state = {
        nickname: '',
        comment: '',
    }

    handleChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        this.setState({ [name]: value });
    }

    render() {
        const { handleChange } = this
        const { comment, nickname } = this.state
        return (
            <div className="Form">
                <label>Your nickname: <input name="nickname" value={nickname} onChange={handleChange} type="text" /></label>
                <textarea name="comment" value={comment} onChange={handleChange} placeholder="your comment..."></textarea>
                <button>Add comment</button>
            </div>
        );
    }
}


export default Form;