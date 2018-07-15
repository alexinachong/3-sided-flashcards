import { merge } from 'lodash';
import { RECEIVE_FLASHCARD, RECEIVE_FLASHCARDS } from '../actions/flashcard_actions';

let dataset = {
  1:
    {
      "id": 1,
      "phrase": "Доброе утро",
      "definition": "Good morning",
      "pronunciation_ipa": "dˈobrəjə ˈutrə",
      "pronunciation_respelling": "Dobraye ootro"
    },
  2:
    {
      "id": 2,
      "phrase": "Добрый день",
      "definition": "Good afternoon",
      "pronunciation_ipa": "dˈobrᵻj dʲˈenʲ",
      "pronunciation_respelling": "Dobriy den'"
    },
  3:
    {
      "id": 3,
      "phrase": "Добрый вечер",
      "definition": "Good evening",
      "pronunciation_ipa": "dˈobrᵻj vʲˈet͡ɕɪr",
      "pronunciation_respelling": "Dobriy vyecher"
    },
  4:
    {
      "id": 4,
      "phrase": "Здравствуйте",
      "definition": "Hello",
      "pronunciation_ipa": "zdrˈastvʊjtʲɪ",
      "pronunciation_respelling": "Zdrastvooyte"
    },
  5:
    {
      "id": 5,
      "phrase": "Привет!",
      "definition": "Hi!",
      "pronunciation_ipa": "prʲɪvʲˈet",
      "pronunciation_respelling": "Preevyet"
    },
  6:
    {
      "id": 6,
      "phrase": "Рад тебя видеть",
      "definition": "Nice to see you!",
      "pronunciation_ipa": "rˈat tʲɪbʲˈæ vʲˈidʲɪtʲ",
      "pronunciation_respelling": "Rat teebya veedet'"
    },
  7:
    {
      "id": 7,
      "phrase": "Как поживаешь?",
      "definition": "How are you?",
      "pronunciation_ipa": "kˈak pəʐᵻvˈajɪʂ?",
      "pronunciation_respelling": "Kak pazhivayesh?"
    },
  8:
    {
      "id": 8,
      "phrase": "Спасибо, прекрасно!",
      "definition": "Fine, thanks!",
      "pronunciation_ipa": "spɐsʲˈibə, prʲɪkrˈasnə",
      "pronunciation_respelling": "Spaseeba preekrasna"
    },
  9:
    {
      "id": 9,
      "phrase": "Неплохо!",
      "definition": "Not so bad",
      "pronunciation_ipa": "nʲɪplˈoxə",
      "pronunciation_respelling": "Neeploha"
    },
  10:
    {
      "id": 10,
      "phrase": "Как Вас зовут?",
      "definition": "What's your name?",
      "pronunciation_ipa": "kˈak vˈas zɐvˈut?",
      "pronunciation_respelling": "Kak vas zavoot?"
    },
  11:
    {
      "id": 11,
      "phrase": "Меня зовут...",
      "definition": "My name is...",
      "pronunciation_ipa": "mʲɪnʲˈæ zɐvˈut...",
      "pronunciation_respelling": "Meenya zavoot..."
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
