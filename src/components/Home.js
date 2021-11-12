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
            <br  className="bgColor"/>
            <br  className="bgColor"/>
                <Row>
                    <Col sm={3} />
                    <Col sm={6} >
                        <h1 className="text-center text-white font bgColor rounded">
                            UNDEFEATED Grand Opening
                        </h1>
                        <p className="text-center text-white bgColor ">
                            UP TO 25% OFF ON SALES
                        </p>
                    </Col>
                    <Col sm={3} />
                    
                </Row>
                <br  className="bgColor"/>
                <Row className="spacer">
                    <Col className="spacer" >
                        <img src={GameHopIMG}  alt="./images/gamehop.jpeg" className="homePic rounded"/>
                    </Col>

                    

                    
                </Row>
                <Row className="spacer">
                    <Col xs={3} />

                    <Col xs={6} className="text-center">
                        <Button className="btn-lg btn bgColor2 rounded " href="/about">
                            LEARN MORE
                        </Button>
                    </Col>

                    <Col xs={3} />
                </Row>
                <br />
               
            </Container>
            
        </div>
    )
}

export default Home
