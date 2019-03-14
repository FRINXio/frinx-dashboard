import React, { Component } from 'react';
import './Header.css';
import logo from '../img/logo.png';
import { Navbar, Nav } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    constructor(props) {
        super(props);
        library.add(faSignOutAlt);
        this.state = {

        }
    }
    
    getName(){
    return "Gerhard"
    }

    logOut() {
        localStorage.setItem('loggedIn', false)
        window.location.href = '%PUBLIC_URL%:3000';
    }

    getGreeting(){
    let d = new Date();
    let time = d.getHours();

    if (time <= 12 && time > 5) {
        return "Good morning"
    }
    if (time > 12 && time <= 17) {
        return "Good afternoon"
    }
    if (time > 17 || time <= 5) {
        return "Good evening"
    }
    }

    render(){
        return (
            <Navbar className="navbar">
                <Navbar.Brand><a href="%PUBLIC_URL%:3000"><img alt='' src={logo}></img></a></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{textAlign: 'right'}}>
                    {this.getGreeting()}, <b>{this.getName()}</b><br />gwieser@frinx.io
                    </Navbar.Text>
                    <Nav>
                        <Nav.Link href="#" onClick={this.logOut}><FontAwesomeIcon icon="sign-out-alt" /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;