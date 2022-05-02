import React, {useState, useEffect, Fragment} from "react";
import "../Views/NewsCard.css"
import NewsCard from '../Views/NewsCard'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios'



function News() {

    const url = 'https://api.rawg.io/api/games?key=69198ac06a454d678afec402ecfe7f88'

        useEffect(() => {
            getGames();
        }, [])

        const [newss,setNewss] = useState([])
        const [loading, setLoading] = useState(false)

        const getGames = async () => {
            try{
                const res = await axios.get(url)
                setNewss(res.data.results)
                console.log(res.data.results)
                setLoading(true)
    
            } catch(err){
                alert(err.message)
            }
        }



    return(

        
        
            <Fragment>
                <Row>
                
                    {newss.map((news) => (
                        
                        <Col >
                            <NewsCard news={news} />
                        </Col>
                    ))}
                
                
                </Row>
            </Fragment>
    )
}

export default News