import React from 'react';
import PropTypes from 'prop-types';
import './WelcomeBoard.css';

const WelcomeBoard = props => (
  <div className="WelcomeBoard">
    <p className="Welcome-message">Welcome</p>
    <p className="Welcome-message">to</p>
    <p className="Welcome-title">{props.welcomeBoardTitle}</p>
  </div>
);

WelcomeBoard.propTypes = {
  welcomeBoardTitle: PropTypes.string,
};

WelcomeBoard.defaultProps = {
  welcomeBoardTitle: 'Quizzy',
};

export default WelcomeBoard;
