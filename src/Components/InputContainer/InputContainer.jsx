import React from 'react';
import PropTypes from 'prop-types';
import './InputContainer.css';

const InputContainer = props => (
  <div className="InputContainer">
    <p>{props.labelText}</p>
    <input type="text" className="Input-Box" onChange={event => props.onInputChange(event)} />
  </div>
);

InputContainer.propTypes = {
  labelText: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
};

InputContainer.defaultProps = {
  labelText: 'Username',
};

export default InputContainer;

