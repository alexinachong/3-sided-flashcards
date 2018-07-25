// Object.values(obj).map(key => key.hi)

import React from 'react';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
  }

  randomizeDefinitionOptions() {
    let allDefinitions = Object.values(this.props.flashcards).map(key => key.definition);
    let definitionOptions = [];

    // select 3 from everything but solution, plus actual solution
    // randomize order of array
    // map over array to display below word 

  }

  render() {
    return (
      <div className="quiz-container">

      </div>
    );
  }
}

export default Quiz;
