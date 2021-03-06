import React from 'react';

import FlashcardContainer from './flashcard_container';
import FlashcardContent from './flashcard_content';

class FlashcardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flashcardNum: 0,
      flashcardSide: 'phrase'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToPreviousCard = this.goToPreviousCard.bind(this);
    this.flipUp = this.flipUp.bind(this);
    this.flipDown = this.flipDown.bind(this);
  }

  // check this
  componentDidMount() {
    this.setState({ flashcards: this.props.flashcards });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.flashcardNum < Object.keys(this.props.flashcards).length - 1) {
      this.setState({
        flashcardNum: this.state.flashcardNum + 1
      });
    } else {
      this.setState({
        flashcardNum: 0
      });
    }
  }

  goToPreviousCard(e) {
    e.preventDefault();
    if (this.state.flashcardNum === 0) {
      this.setState({
        flashcardNum: Object.keys(this.props.flashcards).length - 1
      });
    } else {
      this.setState({
        flashcardNum: this.state.flashcardNum - 1
      });
    }
  }

  flipUp() {
    if (this.state.flashcardSide === 'phrase') {
      this.setState({
        flashcardSide: 'definition'
      });
    } else if (this.state.flashcardSide === 'definition') {
      this.setState({
        flashcardSide: 'pronunciation'
      });
    } else if (this.state.flashcardSide === 'pronunciation') {
      this.setState({
        flashcardSide: 'phrase'
      });
    }
  }

  flipDown() {
    if (this.state.flashcardSide === 'phrase') {
      this.setState({
        flashcardSide: 'pronunciation'
      });
    } else if (this.state.flashcardSide === 'definition') {
      this.setState({
        flashcardSide: 'phrase'
      });
    } else if (this.state.flashcardSide === 'pronunciation') {
      this.setState({
        flashcardSide: 'definition'
      });
    }
  }

  render() {
    return (
      <div className="flashcard-page">
        <h2 className="deck-name">Russian Greetings</h2>
        <p className="flashcard-count"><strong>{this.state.flashcardNum + 1}</strong> of <strong>{Object.keys(this.props.flashcards).length}</strong></p>
        <FlashcardContent flashcard={this.props.flashcards[this.state.flashcardNum]} flashcardId={this.state.flashcardNum} flashcardSide={this.state.flashcardSide} flipUp={this.flipUp} flipDown={this.flipDown} />
        <div className="change-flashcard-buttons-container">
          <button onClick={this.goToPreviousCard} className="change-flashcard-button">PREVIOUS</button>
          <button onClick={this.handleSubmit} className="change-flashcard-button">NEXT</button>
        </div>
      </div>
    );
  }
}

// {this.props.flashcards[this.state.flashcardNum]["phrase"]}

export default FlashcardPage;
