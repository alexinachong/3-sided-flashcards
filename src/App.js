import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Russian Vocabulary</h1>
        <FlashcardListContainer />
      </div>
    );
  }
}

export default App;
