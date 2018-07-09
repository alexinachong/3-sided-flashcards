import React from 'react';

class FlashcardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flashcard-item">
        <p>Flip up (definition)</p>
        <p>Side 1 (word)</p>
        <p>Flip down (pronunciation)</p>
      </div>
    );
  }
}

export default FlashcardItem;
