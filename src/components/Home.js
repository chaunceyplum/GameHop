import React from 'react'
import { Button, Card, CardImg, Col, Container, Row } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { CardBody } from 'reactstrap'
import NewReleases from './NewReleases'
import GameHopIMG from './images/undefeted.jpeg'

const Home = () => {
    return (
        <div className="bgColor">
            <Container className="bgColor">
                <Row>
                    <h1 className="text-center text-white spacer ">
                        UNDEFEATED Grand Opening
                    </h1>
                    <h6 className="text-center text-white ">
                        UP TO 25% OFF ON SALES
                    </h6>
                    
                </Row>
                <Row className="spacer">
                    <Col className="spacer" >
                        <img src={GameHopIMG}  alt="./images/gamehop.jpeg" className="homePic"/>
                    </Col>

                    

                    <Button className="btn-lg btn bgColor1 ">
                        LEARN MORE
                    </Button>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader className="text-center">
                                New Realeases
                            </CardHeader>
                            <CardBody>
                                
                            
                                
                            </CardBody>

                        </Card>
                    
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader className="text-center">
                                Best Seller
                            </CardHeader>
                            <CardBody>
                                <CardImg />

                                
                            </CardBody>

                        </Card>
                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader className="text-center">
                                Consoles
                            </CardHeader>
                            <CardBody>

                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <CardHeader className="text-center">
                                Games
                            </CardHeader>
                            <CardBody>

                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <CardHeader className="text-center">
                                Accesories
                            </CardHeader>
                            <CardBody>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
            
        </div>
    )
}

export default Home
