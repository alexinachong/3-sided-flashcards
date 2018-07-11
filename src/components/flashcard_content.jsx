import React from 'react';

const FlashcardContent = ({ flashcard, flashcardId, flashcardSide, flipUp, flipDown }) => {
  if (flashcardSide === 'definition') {
    return (
      <div className="flashcard-content">
        <p><button onClick={() => flipUp()} className="flip-buttons">Flip up (pronunciation)</button></p>
        <p>{flashcard.definition}</p>
        <p><button onClick={() => flipDown()} className="flip-buttons">Flip down (phrase)</button></p>
      </div>
    );
  } else if (flashcardSide === 'pronunciation') {
    return (
      <div className="flashcard-content">
        <p><button onClick={() => flipUp()} className="flip-buttons">Flip up (phrase)</button></p>
        <p>{flashcard.pronunciation}</p>
        <p><button onClick={() => flipDown()} className="flip-buttons">Flip down (definition)</button></p>
      </div>
    );
  } else {
    return (
      <div className="flashcard-content">
        <p><button onClick={() => flipUp()} className="flip-buttons">Flip up (definition)</button></p>
        <p>{flashcard.phrase}</p>
        <p><button onClick={() => flipDown()} className="flip-buttons">Flip down (pronunciation)</button></p>
      </div>
    );
  }
};

export default FlashcardContent;
