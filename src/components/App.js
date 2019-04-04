import React, { Component } from 'react';
import './App.css';
import Article from './Article';
import './App.css';
import Discussion from './Discussion';

class App extends Component {
  state = {
    commentLog: [],
  }


  //Simulation of other users adding new comments
  otherUserAddNewComment = () => {
    const randComment = Math.floor(Math.random() * 500 + 1)
    const API = "https://jsonplaceholder.typicode.com/comments/" + randComment
    fetch(API)
      .then(result => {
        if (result.status === 200) return result.json()
        else throw new Error()
      })
      .then(newComment => {
        const randTime = Math.floor(Math.random() * 10000)
        const commentLog = [...this.state.commentLog]
        console.log(randTime, commentLog);
        commentLog.push(newComment)
        this.setState({ commentLog });
        setTimeout(this.otherUserAddNewComment, randTime)
      })
      .catch(err => console.log(`Something went wrong!
    ${err}`))
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
