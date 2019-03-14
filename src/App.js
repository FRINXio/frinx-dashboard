import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Viewframe from './pages/Vierwframe';

class App extends Component {

  constructor(props) {
    super(props);
    if(localStorage.getItem('loggedIn') === null){
      localStorage.setItem('loggedIn', false)
    }
  }
  
  routes = [
            { path: "conductor", page: <div className="App"><Header logOut={this.logOut} /><Viewframe title="Conductor" src="http://localhost:5000" /></div>},
            { path: "kibana", page : <div className="App"><Header logOut={this.logOut} /><Viewframe title="Kibana" src="http://localhost:5601/app/kibana" /></div>},
            { path: "frinxit", page : <div className="App"><Header logOut={this.logOut} /><Viewframe title="FrinxIt" src="http://localhost:8888" /></div> },
            { path: "header", page: <div className="App"><Header logOut={this.logOut} /></div> }
  ]

  logIn = () => {
    localStorage.setItem('loggedIn', true)
    window.location.href = 'http://localhost:3000';
  }

  logOut = () => {
    localStorage.setItem('loggedIn', false)
    window.location.href = 'http://localhost:3000';
  }

  goToDashboard = () => {
    
  }

  render() {
    let routeWhich = -1;
    for(let i = 0; i < this.routes.length; i ++){
      if(window.location.pathname.split("/")[1] === this.routes[i].path) {
        routeWhich = i;
        break;
      }
    }

    if(routeWhich != -1) {
      //redirect to correct route if url points to one
      return (
        this.routes[routeWhich].page
      )
    } else {
      //if url points to '/' or anyhting else, redirect to login screen or dashboard
      if(localStorage.getItem('loggedIn') === "true"){
        return (
          <div className="App">
            <Header logOut={this.logOut} />
            <Dashboard />
          </div>
        );
      } else {
        return (
          <div className="App">
            <Login loggedIn={this.logIn} logIn={this.logIn} />
          </div>
        );
      }
    }
  }
}

export default App;
