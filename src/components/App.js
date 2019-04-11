import React, { Component } from 'react';
import './App.scss';
import Article from './Article';
import Discussion from './Discussion';

class App extends Component {
  state = {
    commentLog: [],
  }

  //Generating random content of comment
  getRandomComment = () => {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quae quasi cumque aliquid libero porro totam, blanditiis dolor dolorem sit inventore at laudantium, voluptas animi voluptatum praesentium architecto quo iusto corporis minus vel recusandae esse qui! Ipsa reiciendis reprehenderit maiores quod molestiae numquam quisquam doloremque esse velit dolores. Excepturi fugit saepe molestias doloribus quam iure a repellendus. Fugiat repellat nulla delectus vitae omnis vel sequi esse architecto assumenda quo illum recusandae dolores molestias iusto amet minima error illo, dolorum velit veniam. Atque, voluptas expedita soluta accusamus sed saepe voluptatum et, nobis mollitia nostrum maxime distinctio assumenda repellendus recusandae numquam iure?";
    const randStartPoint = Math.floor(Math.random() * text.length / 2);
    const randEndPoint = Math.floor(Math.random() * ((text.length - 1) - (randStartPoint + 10) + 1)) + randStartPoint + 10;
    const randomComment = text.slice(randStartPoint, randEndPoint);
    return randomComment.charAt(0).toUpperCase() + randomComment.slice(1);
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
          content: this.getRandomComment()
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

  pushCommentToLog = (nickname, content, photo = null) => {
    const newComment = {
      id: this.state.commentLog.length,
      photo,
      nickname,
      content
    }
    const commentLog = [...this.state.commentLog, newComment]
    this.setState({ commentLog });
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
          <Discussion commentLog={commentLog} pushCommentToLog={this.pushCommentToLog} />
        </main>
      </div>
    );
  }
}

export default App;
