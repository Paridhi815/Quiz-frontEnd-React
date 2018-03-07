import React from 'react';
import './App.css';
import Header from '../Header/Header';
import LoginContainer from '../LoginContainer/LoginContainer';

const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 0,
      userName: '',
    };
  }
  onInputChange=(event) => {
    this.setState({
      userName: event.target.value,
    });
  }

  onButtonClick=() => {
    axios({
      method: 'POST',
      url: '/login',
      data: {
        user: this.state.userName,
      },
    }).then(() => {
      this.setState({
        pageNumber: 1,
      });
    });

    this.getPersistState();
  }

  render() {
    if (this.state.pageNumber === 0) {
      return (
        <div className="App">
          <Header title="Quizzy" />
          <LoginContainer
            isLoggedIn=""
            welcomeBoardTitle="Quizzy!"
            labelText="Username"
            onInputChange={event => this.onInputChange(event)}
            onButtonClick={() => this.onButtonClick()}
          />
        </div>
      );
    }
  }
}

export default App;
