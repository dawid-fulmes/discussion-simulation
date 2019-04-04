import React, { Component } from 'react';
import './App.css';
import Article from './Article';
import './App.css';
import Discussion from './Discussion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Article />
          <Discussion />
        </main>
      </div>
    );
  }
}

export default App;
