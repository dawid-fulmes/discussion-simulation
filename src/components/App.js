import React, { Component } from 'react';
import './App.css';
import Article from './Article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Article />
        </main>
      </div>
    );
  }
}

export default App;
