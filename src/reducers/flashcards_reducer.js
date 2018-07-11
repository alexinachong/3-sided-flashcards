import { merge } from 'lodash';
import { RECEIVE_FLASHCARD, RECEIVE_FLASHCARDS } from '../actions/flashcard_actions';

let dataset = {
  1:
    {
      "id": 1,
      "phrase": "Доброе утро",
      "definition": "Good morning",
      "pronunciation": "dˈobrəjə ˈutrə"
    },
  2:
    {
      "id": 2,
      "phrase": "Добрый день",
      "definition": "Good afternoon",
      "pronunciation": "dˈobrᵻj dʲˈenʲ"
    },
  3:
    {
      "id": 3,
      "phrase": "Добрый вечер",
      "definition": "Good evening",
      "pronunciation": "dˈobrᵻj vʲˈet͡ɕɪr"
    },
  4:
    {
      "id": 4,
      "phrase": "Здравствуйте",
      "definition": "Hello",
      "pronunciation": "zdrˈastvʊjtʲɪ"
    }
};

const flashcardsReducer = (state = dataset, action) => {
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
