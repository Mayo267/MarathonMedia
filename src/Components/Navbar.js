import React from "react";
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import GamingIcon from '../images/gamingIcon.jpeg';
import GamingIcon3 from '../images/gamingIcon3.jpeg';
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';

const NavBar = () => (

        <div>
            <Navbar className="topNav" bg="dark" variant="dark" expand="lg" collapseOnSelect>
            
                <Navbar.Brand href="/" style={{ fontSize: '2em', paddingLeft: '12.5%', color: '#10caf0'}}>
                <img
                    src={GamingIcon3}
                    width="60"
                    height="60"
                    className="d-inline-block align-top GamingIcon"
                    alt="React Bootstrap logo"
                />
                Marathon Media
                </Navbar.Brand>

                <Navbar.Toggle/>
                <Navbar.Collapse>
                <Nav className="bottomNav">
                    <Nav.Link style={{color: '#10caf0', fontSize: '1.5em'}} href="/" className="navbar-link">Home</Nav.Link>
                    <Nav.Link style={{color: '#10caf0', fontSize: '1.5em'}} href="/News" className="navbar-link">News</Nav.Link>
                    <Nav.Link style={{color: '#10caf0', fontSize: '1.5em', paddingRight: '50px'}} href="/Reviews" className="navbar-link">Reviews</Nav.Link>
                    <Button variant="outline-info">Login / Signup</Button>{' '}
                </Nav>
                </Navbar.Collapse>
                
            </Navbar>
        </div>
    
)

export default NavBar