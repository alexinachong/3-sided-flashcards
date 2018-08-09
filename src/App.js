import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FlashcardPageContainer from './components/flashcard_page_container';
import LeftNavContainer from './components/left_nav_container';
import QuizContainer from './components/quiz_container';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="header-text">Three-Sided Flashcards</h1>
        <div className="main-content-container">
          <LeftNavContainer />
          <div className="right-content-container">
            <FlashcardPageContainer />
            <QuizContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
