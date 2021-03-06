import React from 'react';
import { Navbar, Glyphicon } from 'react-bootstrap';
import ActivateButton from './activateButton';
import './navbar.css';

const PopupNavbar = ({ onActivate, loading, error }) => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a
                    href="https://github.com/josiahcoad/wanderland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-brand"
                >
                    <Glyphicon glyph="globe" />
                    {' '}
Wanderland
                </a>
            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Form pullRight>
            <ActivateButton bsStyle="primary" onClick={onActivate} loading={loading} error={error} />
        </Navbar.Form>
    </Navbar>
);

export default PopupNavbar;
