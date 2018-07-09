import React from 'react';
import FlashcardItem from './flashcard_item';

class FlashcardList extends React.Component {
  constructor(props) {
    super(props);
  }

  // check this
  componentDidMount() {
    this.setState({ flashcards: this.props.flashcards });
  }

  render() {
    return (
      <div className="flashcard-list">
        <div className="flashcard-items-container">
          <p>TEMP: Map over flashcards here</p>
        </div>
      </div>
    );
  }
}

export default FlashcardList;
