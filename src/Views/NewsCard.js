import React from 'react'
import axios from 'axios'
import {CardGroup, Card, Button} from 'react-bootstrap'
import News from '../Pages/News'

function NewsCard( {news} ){

    

    return(
        <>
            <CardGroup>
                <Card style={{ width: '18rem' }}>
                    <Card.Img stlye={{ objectFit: 'contain' }} variant="top" src={news.background_image} />
                    <Card.Body>
                        <Card.Title>{news.name}</Card.Title>
                        <Card.Text>
                        Genre: {news.genres[0].name} <br/>
                        Metacritic Rating: {news.metacritic} <br/>
                        ESRB: {news.esrb_rating.name}
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </CardGroup>
        </>
    )
}

export default NewsCard