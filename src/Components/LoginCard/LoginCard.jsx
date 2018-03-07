import React from 'react';
import PropTypes from 'prop-types';
import './LoginCard.css';
import WelcomeBoard from '../WelcomeBoard/WelcomeBoard';
import LoginForm from '../LoginForm/LoginForm';

const LoginCard = props => (
  <div className="LoginCard">
    <WelcomeBoard welcomeBoardTitle={props.welcomeBoardTitle} />
    <LoginForm
      labelText={props.labelText}
      onInputChange={event => props.onInputChange(event)}
      onButtonClick={() => props.onButtonClick()}
    />
  </div>
);

LoginCard.propTypes = {
  welcomeBoardTitle: PropTypes.string,
  labelText: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

LoginCard.defaultProps = {
  welcomeBoardTitle: 'Quizzy',
  labelText: 'Username',
};

export default LoginCard;
