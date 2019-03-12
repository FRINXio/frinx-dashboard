import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }
  
  logIn = () => {
    this.setState({
      loggedIn: true
    })
  }

  logOut = () => {
    this.setState({
      loggedIn: false
    })
  }

  goToDashboard = () => {
    window.location.href = 'http://localhost:3000';
  }

  render() {
    if(window.location.pathname == "/header") {
      return (
        <div className="App">
          <Header logOut={this.goToDashboard} />
        </div>
      )
    } else {
      if(this.state.loggedIn){
        return (
          <div className="App">
            <Header logOut={this.logOut} />
            <Dashboard />
          </div>
        );
      } else {
        return (
          <div className="App">
            <Login loggedIn={this.state.loggedIn} logIn={this.logIn} />
          </div>
        );
      }
    }
  }
}

export default App;
