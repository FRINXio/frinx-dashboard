import React, {Component} from 'react';
import './Login.css';
import {Button, Col, Container, Form, InputGroup, Row} from 'react-bootstrap';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLock, faUser, faTimes} from '@fortawesome/free-solid-svg-icons';
import logoWhite from '../img/logoWhite.png';
import Papa from 'papaparse/papaparse.min.js';
import csvFilePath from '../data/users.csv';
import passwordHash from 'password-hash';

class Login extends Component {


    constructor(props){
        super(props);
        library.add(faUser, faLock);
        this.state = {
            activeUsername: false,
            activePassword: false,
            password: '',
            username: '',
            csvData: '',
            showNotice: false
        };
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.logIn = this.logIn.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentWillMount() {
        Papa.parse(csvFilePath, {
            header: true,
            download: true,
            skipEmptyLines: true,
            complete: this.getData
        });
    }

    getData(result) {
        let data = result.data;
        this.setState({
            csvData: data
        });
    }

    logIn = (e) => {
        e.preventDefault();
        let data = this.state.csvData;
        let authentication = false;
        let username = this.state.username;
        let password = this.state.password;
        let useremail = "";
        data.forEach(item => {
            if (username === item.name || username === item.email) {
                if (passwordHash.verify(password, item.password)) {
                    username = item.name;
                    useremail = item.email;
                    authentication = true;
                }
            }
        });

        if (authentication) {
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('email', useremail);
            localStorage.setItem('name', username);
            window.location.href = "http://"+window.location.hostname+":3000";
        } else {
            this.setState({
                showNotice: true
            })
        }
    };

    setUsername(event) {
        this.setState({username: event.target.value});
    }

    setPassword(event) {
        this.setState({password: event.target.value});
    }

    render(){
        return(
            
            <Container>
                <div className="accessPanel">
                <Row>
                    <Col className="whiteBg" xs="7">
                        <div className="loginWindow">
                        <h1>Sign in</h1>
                        <center>
                            <Form onSubmit={this.logIn}>
                                <InputGroup className={!this.state.activeUsername ? "input-user pretty-feild paddedFeild" : "input-user pretty-feild paddedFeild focusedInput"}>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="user-addon"><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <input onFocus={() => {this.setState({activeUsername: true})}} onBlur={() => {this.setState({activeUsername: false})}} type="text" placeholder="Username" onChange={this.setUsername}/>
                                </InputGroup>
                                <InputGroup className={!this.state.activePassword ? "input-password pretty-feild paddedFeild" : "input-password pretty-feild paddedFeild focusedInput"}>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="password-addon"><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <input onFocus={() => {this.setState({activePassword: true})}} onBlur={() => {this.setState({activePassword: false})}} type="password" placeholder="Password" onChange={this.setPassword}/>
                                </InputGroup>
                            </Form>
                        </center>
                            <div className={ this.state.showNotice ? 'wrongLogin' : 'hidden'}>
                                <FontAwesomeIcon icon={faTimes} /> Wrong username or password
                            </div>
                        <Button variant="primary" onClick={this.logIn} className="paddedButton">
                            Sign in
                        </Button>
                        <a href="#"><div className="smallText">Forgot your password?</div></a>
                        <br /> or<br />
                        <Button variant="primary" onClick={this.props.logIn} className="paddedButton">
                            Sign in using Facebook
                        </Button>
                        </div>
                        <br />
                        <br />
                    </Col>
                    <Col className="gradientBg" xs="5">
                        <div className="registerWindow">
                        <h1>Sign up</h1>
                        Don't have an account yet? You can:<br />
                        <Button className="btn-margin" variant="outline-light" type="submit">
                            Sign up using Facebook
                        </Button><br />
                        or<br />
                        <Button className="btn-margin" variant="outline-light">
                            Register as a new user
                        </Button>
                        <br />
                        <a href="https://frinx.io"><img className="logo" src={logoWhite}></img></a>
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
            
        )
    }
}


export default (Login);