import { connect } from 'react-redux';
import Quiz from './quiz';

const mapStateToProps = (state, ownProps) => {
  return ({
    flashcards: state.flashcards
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
