import React, { useState, useContext } from 'react'
import { Button, Card, CardImg, Col, Row } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { CardBody, CardText, CardTitle } from 'reactstrap'


const NewReleases = (props) => {
    const {games} = props
   
    
    
    return (
        <div>
            
                            <h3>
                                New Realeses
                            </h3>
                            <div>
                                <Row>
                                    {games.map((games,i) => {
                                        return(
                                        <Col key={i} sm={12} md={6} lg={4} xl={3} >
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>
                                                        {`${games.name} $${games.price}`}
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardImg src={games.img}/>
                                                <CardBody>
                                                    <CardText>
                                                        {games.releaseDate}
                                                    </CardText>
                                                    
                                                    <Button onClick>
                                                        Add To Cart
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )})}
                                </Row>
            </div>
        </div>
    )
}

export default NewReleases
