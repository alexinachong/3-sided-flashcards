import React from 'react';

const FlashcardContent = ({ flashcard, flashcardId, flashcardSide, flipUp, flipDown }) => {
  if (flashcardSide === 'definition') {
    return (
      <div className="flashcard-content">
        <button onClick={() => flipUp()} className="flip-buttons">FLIP UP FOR PRONUNCIATION</button>
        <p>{flashcard.definition}</p>
        <button onClick={() => flipDown()} className="flip-buttons">FLIP DOWN FOR PHRASE</button>
      </div>
    );
  } else if (flashcardSide === 'pronunciation') {
    return (
      <div className="flashcard-content">
        <button onClick={() => flipUp()} className="flip-buttons">FLIP UP FOR PHRASE</button>
        <p>{flashcard.pronunciation}</p>
        <button onClick={() => flipDown()} className="flip-buttons">FLIP DOWN FOR DEFINITION</button>
      </div>
    );
  } else {
    return (
      <div className="flashcard-content">
        <button onClick={() => flipUp()} className="flip-buttons">FLIP UP FOR DEFINITION</button>
        <p>{flashcard.phrase}</p>
        <button onClick={() => flipDown()} className="flip-buttons">FLIP DOWN FOR PRONUNCIATION</button>
      </div>
    );
  }
};

export default FlashcardContent;
