import React from 'react'
import { Button, Card, CardImg, Col, Container, Row } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { CardBody } from 'reactstrap'
import NewReleases from './NewReleases'

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <h1 className="text-center">
                        GameHop Grand Opening
                    </h1>
                    <h6 className="text-center">
                        UP TO 25% OFF ON SALES
                    </h6>
                    <Button className="btn-lg btn btn-dark">
                        LEARN MORE
                    </Button>
                </Row>
                <Row>
                    <Col>
                        <img src={'./images/gamehop.jpeg'} />
                    </Col>
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
