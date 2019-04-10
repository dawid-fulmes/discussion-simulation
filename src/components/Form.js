import React, { Component } from 'react';
import './Form.scss'
class Form extends Component {
    state = {}
    render() {
        return (
            <div className="Form">
                <label>Your nickname: <input type="text" /></label>
                <textarea placeholder="Your comment..."></textarea>
                <button>Add comment</button>
            </div>
        );
    }
}

export default Form;