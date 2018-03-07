import React from 'react';
import PropTypes from 'prop-types';
import './OptionsPane.css';

const OptionsPane = (props) => {
  const localqid = props.questionId;
  return (
    <div className="OptionPane">
      <input
        type="radio"
        className="radio"
        name={props.questionId}
        value={props.option}
        // onChange={(event, questionId) => props.handleOptionChange(event, props.questionId)}
        // checked={check}
      />
      <p className="text"> {props.option}</p>
      <br />
    </div>
  );
};


OptionsPane.propTypes = {
  questionId: PropTypes.number,
  option: PropTypes.string,
};

OptionsPane.defaultProps = {
  questionId: 0,
  option: '',
};

export default OptionsPane;
