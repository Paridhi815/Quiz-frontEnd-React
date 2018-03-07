import React from 'react';
import PropTypes from 'prop-types';
import './QuestionsList.css';
import QuestionBox from '../QuestionBox/QuestionBox';

const QuestionsList = props => (
  <div className="QuestionsList">
    {
  props.allQuestions.map((questionObj, index) => (
    <QuestionBox
      questionNumber={index + 1}
      question={questionObj.questionText}
      questionId={questionObj.questionId}
      options={questionObj.options}
    //   handleOptionChange={(event, qid) => this.handleOptionChange(event, qid)}
    //   ansPersist={this.state.ansPersist}
    />
         ))
  }
  </div>
);

QuestionsList.propTypes = {
  allQuestions: PropTypes.array.isRequired,
};

export default QuestionsList;
