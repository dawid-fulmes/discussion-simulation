import React, { Component } from 'react';
import './App.scss';
import Article from './Article';
import Discussion from './Discussion';

class App extends Component {
  state = {
    commentLog: [],
  }


  //Simulation of other users adding new comments
  otherUserAddNewComment = () => {
    const API = "https://randomuser.me/api/?results=1"
    fetch(API)
      .then(result => {
        if (result.status === 200) return result.json()
        else throw new Error()
      })
      .then(result => {
        const { login: { username }, picture: { thumbnail } } = result.results[0]
        const newComment = {
          id: this.state.commentLog.length,
          photo: thumbnail,
          nickname: username,
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, modi!"
        }
        return newComment
      })
      .then(newComment => {
        const randTime = Math.floor(Math.random() * 20000 + 5000)
        const commentLog = [...this.state.commentLog]
        commentLog.push(newComment)
        this.setState({ commentLog });
        setTimeout(this.otherUserAddNewComment, randTime)
      })
      .catch(err => console.log(`Something went wrong! ${err}`))
  }


  componentDidMount() {
    this.otherUserAddNewComment()
  }

  render() {
    const { commentLog } = this.state
    return (
      <div className="App">
        <main>
          <Article />
          <Discussion commentLog={commentLog} />
        </main>
      </div>
    );
  }
}

export default App;
