import React from 'react';
import PropTypes from 'prop-types';
import './ReusableButton.css';

const ReusableButton = props => (
  <div className="ReusableButton">
    <button onClick={() => props.onButtonClick()}>{props.buttonText}</button>
  </div>
);

ReusableButton.propTypes = {
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
};

ReusableButton.defaultProps = {
  buttonText: 'Login',
};

export default ReusableButton;
