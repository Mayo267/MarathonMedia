import React from "react";
import './InfoCards.css'
import 'bootstrap/dist/css/bootstrap.css';
import testImage from "../images/halo3.jpeg";
import {Container, Row, Col, Card} from 'react-bootstrap';

const InfoCards = () => (

        <div>
            <Row xs={1} md={2} className="g.0 backdrop">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col  className="col-md-4 cardColumns">
                    <Card >
                        <Card.Img variant="top" src={testImage} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
    
)

export default InfoCards