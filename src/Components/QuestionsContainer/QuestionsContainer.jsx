import React from 'react';
import PropTypes from 'prop-types';
import './QuestionsContainer.css';
import QuestionList from '../QuestionsList/QuestionsList';
// import ReusableButton from '../ReusableButton/ReusableButton';

const QuestionsContainer = props => (
  <div className="QuestionsContainer">
    <QuestionList allQuestions={props.allQuestions} />
    {/* <ReusableButton
      buttonText="Calculate"
      onButtonClick={() => this.onButtonClick()}
    /> */}
  </div>
);

QuestionsContainer.propTypes = {
  allQuestions: PropTypes.array.isRequired,
};

export default QuestionsContainer;
