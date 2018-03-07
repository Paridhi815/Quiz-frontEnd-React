import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';
import InputContainer from '../InputContainer/InputContainer';
import ReusableButton from '../ReusableButton/ReusableButton';

const LoginForm = props => (
  <div className="LoginForm">
    <p>Login</p>
    <InputContainer
      labelText={props.labelText}
      onInputChange={event => props.onInputChange(event)}
    />
    <ReusableButton
      buttonText={props.buttonText}
      onButtonClick={() => props.onButtonClick()}
    />
  </div>
);

LoginForm.propTypes = {
  labelText: PropTypes.string,
  buttonText: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  labelText: 'Username',
  buttonText: 'Login',
};

export default LoginForm;
