import React from 'react';
import './App.css';
import Header from '../Header/Header';
import LoginContainer from '../LoginContainer/LoginContainer';
import QuestionsContainer from '../QuestionsContainer/QuestionsContainer';

const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 0,
      isLoggedIn: false,
      userName: '',
      questions: [],
      persist: [],
    };
  }
  onInputChange=(event) => {
    this.setState({
      userName: event.target.value,
    });
  }

  onLogin=() => {
    console.log('un', this.state.userName);

    axios({
      method: 'POST',
      url: '/login',
      data: {
        userName: this.state.userName,
      },
    }).then((loginObj) => {
      this.setState({
        pageNumber: 1,
        isLoggedIn: true,
        questions: loginObj.data.questions,
        persist: loginObj.data.persist,
      });
    });
    console.log(this.state.questions);
  }

  onCalculate=() => {
    axios({
      method: 'PUT',
      url: '/score',
      data: {
        userId: this.state.userId,
      },
    }).then((calculateObj) => {
      console.log(calculateObj);
      this.setState({
        pageNumber: 2,
      });
    });
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
            onButtonClick={() => this.onLogin()}
          />
        </div>
      );
    } else if (this.state.pageNumber === 1) {
      return (
        <div className="App">
          <Header
            title="Quizzy"
            hello="Hello"
            name={this.state.userName}
          />
          <QuestionsContainer
            allQuestions={this.state.questions}
            onButtonClick={() => this.onCalculate()}
          />
        </div>
      );
    }

    return (
      <div>
          Paridhi
      </div>
    );
  }
}

export default App;
