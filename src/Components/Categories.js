import React from "react";
import './Categories.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Nav} from 'react-bootstrap';

const Categories = () => (

        <div>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link className="category-link" eventKey="link-1">Movies</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="category-link" eventKey="link-2">Games</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="category-link" eventKey="link-3">Books</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="category-link" eventKey="link-3">Comics</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    
)

export default Categories