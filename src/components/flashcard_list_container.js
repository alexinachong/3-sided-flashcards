import { connect } from 'react-redux';
import { receiveFlashcards, receiveFlashcard } from '../actions/flashcard_actions';
import FlashcardList from './flashcard_list';

const mapStateToProps = (state, ownProps) => {
  return ({
    flashcards: Object.keys(state.flashcards).map(flashcardId => state.flashcards[flashcardId])
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    receiveFlashcards: () => dispatch(receiveFlashcards()),
	  receiveFlashcard: flashcardId => dispatch(receiveFlashcard(flashcardId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardList);
