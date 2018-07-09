import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FlashcardListContainer from './components/flashcard_list_container';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="header-text">Three-Sided Flashcards</h1>
        <FlashcardListContainer />
      </div>
    );
  }
}

export default App;
