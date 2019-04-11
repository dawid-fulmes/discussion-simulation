import React, { Component } from 'react';
import './Form.scss'

class Form extends Component {
    state = {
        nickname: '',
        comment: '',
        errors: {
            nicknameErrorVisile: false,
            commentErrorVisile: false
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    checkForm = () => {
        const { nickname, comment } = this.state;
        const errors = this.state.errors;
        const formStatus = {
            isOK: true,
            errors,
        }
        if (nickname < 3) {
            formStatus.errors.nicknameErrorVisile = true;
            formStatus.isOK = false;
        }
        if (comment < 1) {
            formStatus.errors.commentErrorVisile = true;
            formStatus.isOK = false;
        }
        return formStatus;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formStatus = this.checkForm();
        if (formStatus.isOK) {
            const { nickname, comment } = this.state;
            this.props.pushCommentToLog(nickname, comment)
            this.setState({
                comment: '',
                errors: {
                    nicknameErrorVisile: false,
                    commentErrorVisile: false
                }
            });

        } else {
            this.setState({ errors: formStatus.errors });
        }
    }
    componentDidUpdate() {
        const { nicknameErrorVisile, commentErrorVisile } = this.state.errors
        if (nicknameErrorVisile || commentErrorVisile) {
            setTimeout(() => {
                this.setState({
                    errors: {
                        nicknameErrorVisile: false,
                        commentErrorVisile: false
                    }
                })
            }, 3000)
        }
    }

    render() {
        const { handleChange, handleSubmit } = this;
        const { comment, nickname } = this.state;
        const { commentErrorVisile, nicknameErrorVisile } = this.state.errors
        return (
            <form onSubmit={handleSubmit} className="Form">
                <label>Your nickname: <input name="nickname" value={nickname} onChange={handleChange} type="text" /></label>
                {nicknameErrorVisile && <div className="error">Nickname cat't be shorter than 3 letters!</div>}
                <textarea name="comment" value={comment} onChange={handleChange} placeholder="your comment..."></textarea>
                {commentErrorVisile && <div className="error">Comment heve to be at least one letter!</div>}
                <button>Add comment</button>
            </form>
        );
    }
}


export default Form;