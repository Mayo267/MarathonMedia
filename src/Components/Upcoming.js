import React from "react";
import './Upcoming.css'
import 'bootstrap/dist/css/bootstrap.css';
import testImage from "../images/halo3.jpeg";
import eldenImage from '../images/EldenRing.jpeg';
import {Container, Carousel, Row, Col, Card, CardGroup} from 'react-bootstrap';

const Upcoming = () => (

        <div>
            <Carousel className="CarouselHome">
            <Carousel.Item>
                <img
                className="d-block w-100 CarouselHome"
                src={eldenImage}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Elden Ring</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 CarouselHome"
                src={testImage}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Halo 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 CarouselHome"
                src={eldenImage}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Elden Ring</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    
)

export default Upcoming