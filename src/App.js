import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FlashcardPageContainer from './components/flashcard_page_container';
import LeftNav from './components/left_nav';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="header-text">Three-Sided Flashcards</h1>
        <div className="main-content-container">
          <LeftNav />
          <FlashcardPageContainer />
        </div>
      </div>
    );
  }
}

export default App;
