import { combineReducers } from 'redux';
import flashcardsReducer from './flashcards_reducer';

const rootReducer = combineReducers({
  flashcards: flashcardsReducer
});

export default rootReducer;
