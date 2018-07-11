export const RECEIVE_FLASHCARD = 'RECEIVE_FLASHCARD';
export const RECEIVE_FLASHCARDS = 'RECEIVE_FLASHCARDS';

export const receiveFlashcard = card => ({
  type: RECEIVE_FLASHCARD,
  card: card
});

export const receiveFlashcards = cards => ({
  type: RECEIVE_FLASHCARDS,
  cards: cards
});
