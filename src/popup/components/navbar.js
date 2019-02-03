import React from 'react';
import { Nav, Navbar, Form } from 'react-bootstrap';
import ActivateButton from './activateButton';
import './navbar.css';

const PopupNavbar = ({ onActivate, loading, error }) => (
    <Navbar>
        <Navbar.Brand>
            <a
                href="https://github.com/josiahcoad/wanderland"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-brand"
            >
                <span className="glyphicon glyphicon-globe" aria-hidden="true" />
                {' '}
Wanderland
            </a>
        </Navbar.Brand>
        <Nav>
            <Nav.Item>
                <Form>
                    <ActivateButton onClick={onActivate} loading={loading} error={error} />
                </Form>
            </Nav.Item>
        </Nav>
    </Navbar>
);

export default PopupNavbar;
