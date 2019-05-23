import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Viewframe from './pages/Vierwframe';
import Registration from './pages/Registration';

class App extends Component {

  constructor(props) {
    super(props);
    if(localStorage.getItem('loggedIn') === null){
      localStorage.setItem('loggedIn', false)
    }
    this.state = {
        username: 'User',
        useremail: '',
        routes: [
            { path: "conductor", page: "http://"+window.location.hostname+":5000"},
            { path: "kibana", page: "http://"+window.location.hostname+":5601/app/kibana"},
            { path: "frinxit", page: "http://"+window.location.hostname+":8888"},
            { path: "header" }
        ]
    }
  }

  componentWillMount() {
      if(localStorage.getItem('name') !== null) {
          let username = localStorage.getItem('name');
          this.setState({
              username : username
          })
      }
      if(localStorage.getItem('email') !== null) {
          let useremail = localStorage.getItem('email');
          this.setState({
              useremail : useremail
          })
      }
  }

  logIn = () => {
    localStorage.setItem('loggedIn', true);
    window.location.href = "http://"+window.location.hostname+":3000";
  };

  logOut = () => {
    localStorage.setItem('loggedIn', false);
    localStorage.clear();
    window.location.href = "http://"+window.location.hostname+":3000";
  };

  goToDashboard = () => {
    
  };

  render() {
    let routeWhich = -1;
    for(let i = 0; i < this.state.routes.length; i ++){
      if(window.location.pathname.split("/")[1] === this.state.routes[i].path) {
        routeWhich = i;
        break;
      }
    }

    if(routeWhich !== -1) {
      //redirect to correct route if url points to one
      return (
          <div className="App">
              <Header username={this.state.username} useremail={this.state.useremail} logOut={this.logOut} />
              <Viewframe title={this.state.routes[routeWhich].path} src={this.state.routes[routeWhich].page} />
          </div>
      )
    } else {
      //if url points to '/' or anyhting else, redirect to login screen or dashboard
      if(localStorage.getItem('loggedIn') === "true"){
        return (
          <div className="App">
            <Header username={this.state.username} useremail={this.state.useremail} logOut={this.logOut} />
            <Dashboard />
          </div>
        );
      } else {
          if(window.location.pathname.split("/")[1] === "registration") {
              return (
                  <div className="App">
                      <Registration />
                  </div>
              );
          } else {
              return (
                  <div className="App">
                      <Login loggedIn={this.logIn} logIn={this.logIn}/>
                  </div>
              );
          }
      }
    }
  }
}

export default App;
