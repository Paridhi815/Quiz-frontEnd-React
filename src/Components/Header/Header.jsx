import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = props => (
  <div className="Header">
    <header className="Header-heading">
      {props.title}
    </header>
    <span className="Hello">{props.hello} {props.name}</span>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  hello: PropTypes.string,
  name: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  hello: '',
  name: '',
};

export default Header;
