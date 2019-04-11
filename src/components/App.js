import React, { Component } from 'react';
import './App.scss';
import Article from './Article';
import Discussion from './Discussion';
import userImg from '../img/user.png'

class App extends Component {
  state = {
    commentLog: [],
  }

  pushCommentToLog = (nickname, content, photo = userImg) => {
    const date = new Date()
    const newComment = {
      id: this.state.commentLog.length,
      photo,
      nickname,
      content,
      date: [
        date.toUTCString().slice(0, -13),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getTime(),
      ]
    }
    const commentLog = [...this.state.commentLog, newComment]
    this.setState({ commentLog });
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
        this.pushCommentToLog(username, this.getRandomComment(), thumbnail)
        const randTime = Math.floor(Math.random() * 20000 + 5000)
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
          <Discussion commentLog={commentLog} pushCommentToLog={this.pushCommentToLog} />
        </main>
      </div>
    );
  }
}

export default App;
