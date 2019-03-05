import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Login />
      </div>
    );
  }
}

export default App;
