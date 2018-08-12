// Object.values(obj).map(key => key.hi)

import React from 'react';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.randomizeDefinitionOptions = this.randomizeDefinitionOptions.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
  }

  randomizeDefinitionOptions() {
    let allDefinitions = Object.values(this.props.flashcards).map(key => key.definition);
    let definitionOptions = [];

    // let optionOne = allDefinitions[Math.floor(Math.random() * allDefinitions.length)];

    // select 3 from everything but solution, plus actual solution
    // randomize order of array
    // map over array to display below word
    // return optionOne;

    let shuffledOptions = this.shuffleArray(allDefinitions);

    return shuffledOptions.slice(0, 3);
  }

  shuffleArray(array) {
    let newArray = [];

    let randEl = 0;
    let arrLength = array.length;
    while (newArray.length < arrLength) {
      console.log(arrLength);
      let randElIdx = Math.floor(Math.random() * array.length);
      randEl = array[randElIdx];
      newArray.push(randEl);

      array.splice(randElIdx, 1);
    }

    return newArray;
  }

  checkWordDefinitionMatch(word, definition) {
    
  }

  render() {
    return (
      <div className="quiz-container">
        <p>Word goes here</p>
        {this.randomizeDefinitionOptions().map(option => (
          <div className="quiz-option"><input type="radio" name="gender" value={option} />{option}</div>
        ))}
      </div>
    );
  }
}

export default Quiz;
