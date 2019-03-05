import React, { Component } from 'react';
import './Dashboard.css';
import { Row, Col, Container } from 'react-bootstrap';
import Panel from '../components/Panel';
import { faBookOpen, faCogs, faTasks, faFileAlt, faBoxOpen, faUsers, faLayerGroup} from '@fortawesome/free-solid-svg-icons';

class Dashboard extends Component {

    render() {
        return (
            <Container>
                    <Row>
                        <Col><Panel title='Service Catalog' desc="Browse and execute services." icon={faBookOpen} style={{background: 'linear-gradient'}} link='#' /></Col>
                        <Col><Panel title='Workflows' desc="Organize and execute workflows using Conductor." icon={faCogs} style={{background: 'linear-gradient'}} link='http://llocalhost:5000/#/workflow/metadata' /></Col>
                        <Col><Panel title='Tasks' desc="Manage existing tasks and create new ones." icon={faTasks} style={{background: 'linear-gradient'}} link='http://localhost:5000/#/workflow/metadata/' /></Col>
                        <Col><Panel title='UniConfig' desc="Some sort of description about the service goes here." icon={faFileAlt} style={{background: 'linear-gradient'}} link='#' /></Col>
                    </Row>
                    <Row>
                        <Col><Panel title='Inventory' desc="View devices connected to the network." icon={faBoxOpen} style={{background: 'linear-gradient'}} link='http://localhost:5601' /></Col>
                        <Col><Panel title='Logs' desc="Manage logs through Kibana." icon={faLayerGroup} style={{background: 'linear-gradient'}} link='http://localhost:5601' /></Col>
                        <Col><Panel title='User Managment' desc="Add or delete users, configure permissions." icon={faUsers} style={{background: 'linear-gradient'}} link='#' /></Col>
                        <Col><Panel disabled={true} title='More coming soon' link='https://frinx.io/' /></Col>
                    </Row>
            </Container>
        )}
}

export default Dashboard;
