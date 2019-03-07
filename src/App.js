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

  render() {
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

export default App;
