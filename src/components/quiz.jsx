// Object.values(obj).map(key => key.hi)

import React from 'react';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.randomizeDefinitionOptions = this.randomizeDefinitionOptions.bind(this);
  }

  randomizeDefinitionOptions() {
    let allDefinitions = Object.values(this.props.flashcards).map(key => key.definition);
    let definitionOptions = [];

    let optionOne = allDefinitions[Math.floor(Math.random() * allDefinitions.length)];

    // select 3 from everything but solution, plus actual solution
    // randomize order of array
    // map over array to display below word
    return optionOne;
  }

  render() {
    return (
      <div className="quiz-container">
        {this.randomizeDefinitionOptions()}
      </div>
    );
  }
}

export default Quiz;