import React from "react";
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

const NavBar = () => (

        <div>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Navbar.Brand href="/">Marathon Media</Navbar.Brand>

                <Navbar.Toggle/>
                <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/" className="navbar-link">Home</Nav.Link>
                    <Nav.Link href="/News" className="navbar-link">News</Nav.Link>
                    <Nav.Link href="/Reviews" className="navbar-link">Reviews</Nav.Link>
                    <Nav.Link href="/Login" className="navbar-link">Login</Nav.Link>
                    <Nav.Link href="/Profile" className="navbar-link">Profile</Nav.Link>
                </Nav>
                {/* <Form className="d-flex" >
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                </Navbar.Collapse>
                
            </Navbar>
        </div>
    
)

export default NavBar