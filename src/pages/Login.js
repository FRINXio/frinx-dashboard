import React, { Component } from 'react';
import './Login.css';
import { Container, Button, Form, Col, Row, InputGroup } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import logoWhite from '../img/logoWhite.png';

class Login extends Component {
    constructor(props){
        super(props);
        library.add(faUser, faLock);
        this.state = {
            activeUsername: false,
            activePassword: false
        }
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
                        <InputGroup className={!this.activeUsername ? "input-user pretty-feild paddedFeild" : "input-user pretty-feild paddedFeild focusedInput"}>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="user-addon"><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <input onFocus={() => {this.setState({activeUsername: true})}} onBlur={() => {this.setState({activeUsername: false})}} type="text" placeholder="Username" />
                        </InputGroup>
                        <InputGroup className="input-password pretty-feild paddedFeild">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="password-addon"><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <input type="password" placeholder="Password" />
                        </InputGroup>
                        </center>
                        <Button variant="primary" onClick={this.props.logIn} className="paddedButton">
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

export default Login;