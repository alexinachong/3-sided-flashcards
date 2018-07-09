import { combineReducers } from 'redux';
import flashcardsReducer from './flashcardsReducer';

const rootReducer = combineReducers({
  flashcards: flashcardsReducer
});

export default rootReducer;
