import React from 'react';
import PropTypes from 'prop-types';
import './QuestionBox.css';
import OptionsPane from '../OptionsPane/OptionsPane';

const QuestionBox = props => (
  <div className="QuestionBox">
    <div className="Question-number">
        Question {props.questionNumber}
    </div>
    <div className="Questions">
      {props.question}
    </div>
    <div className="options">
      {
        Object.values(props.options).forEach((option) => {
          <OptionsPane option={option} />;
    })
  }
    </div>
  </div>
);

QuestionBox.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  questionId: PropTypes.number.isRequired,
};

export default QuestionBox;
