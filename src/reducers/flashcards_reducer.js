import { merge } from 'lodash';
import { RECEIVE_FLASHCARD, RECEIVE_FLASHCARDS } from '../actions/flashcard_actions';

const flashcardsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_FLASHCARD:
      return merge({}, state, action.card);

    case RECEIVE_FLASHCARDS:
      return merge({}, action.cards);

    default:
      return state;
  }
};

export default flashcardsReducer;
