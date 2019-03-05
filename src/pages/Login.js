import React, { Component } from 'react';
import './Login.css';
import { Container, Button, Form, Col, Row} from 'react-bootstrap';

class Login extends Component {
    constructor(props){
        this.signIn = this.signIn.bind(this);
    }
    
    signIn(){
        
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <div className="loginWindow">
                        <h1>Sign in</h1>
                        <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            <Form.Text className="text-muted">
                            You can also use the email address you provided.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Remember me on this computer" />
                        </Form.Group>
                        <Button variant="primary" onClick={signIn()}>
                            Sign in
                        </Button>
                        <a href="#"><div className="smallText">Forgot your password?</div></a>
                        </Form>
                        </div>
                        <br />
                        <br />
                    </Col>
                    <Col>
                        <div className="registerWindow">
                        <h1>Sign up</h1>
                        Don't have an account yet? You can:<br />
                        <Button className="btn-margin" variant="primary" type="submit">
                            Login with Facebook
                        </Button><br />
                        or<br />
                        <Button className="btn-margin" variant="default">
                            Register as a new user
                        </Button>
                        </div>
                        <div className="notice">© 2019 <a href="https://frinx.io">FRINX</a></div>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default Login;