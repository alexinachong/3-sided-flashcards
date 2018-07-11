import { connect } from 'react-redux';
// import { receiveFlashcards, receiveFlashcard } from '../actions/flashcard_actions';
// import { incrementFlashcardNum } from '../actions/flashcard_actions';
import FlashcardPage from './flashcard_page';

// mapStateToProps
// flashcards: Object.keys(state.flashcards).map(flashcardId => state.flashcards[flashcardId])

const mapStateToProps = (state, ownProps) => {
  return ({
    flashcards: state.flashcards
  });
};

// mapDispatchToProps
// receiveFlashcards: () => dispatch(receiveFlashcards()),
// receiveFlashcard: flashcardId => dispatch(receiveFlashcard(flashcardId))
// incrementFlashcardNum: () => dispatch(incrementFlashcardNum())

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardPage);
