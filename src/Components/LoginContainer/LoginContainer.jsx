import React from 'react';
import PropTypes from 'prop-types';
import './LoginContainer.css';
import LoginCard from '../LoginCard/LoginCard';

const LoginContainer = props => (
  <div className="LoginContainer">
    <LoginCard
      welcomeBoardTitle={props.welcomeBoardTitle}
      labelText={props.labelText}
      onInputChange={event => props.onInputChange(event)}
      onButtonClick={() => props.onButtonClick()}
    />
  </div>
);

LoginContainer.propTypes = {
  welcomeBoardTitle: PropTypes.string,
  labelText: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

LoginContainer.defaultProps = {
  welcomeBoardTitle: 'Quizzy',
  labelText: 'Username',
};

export default LoginContainer;
