import React, { useState } from 'react'
import { Button, Col, Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink,  } from 'react-bootstrap'
import { NavbarToggler } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import NavData from './NavData'
import {Link} from 'react-router-dom'
import OffCanvasNav from './OffCanvasNav';

const MyNav = (props) => {
    
    const [isOpen,setisOpen] = useState(false)
    const toggle = () => setisOpen(!isOpen)
    const data = useState(NavData)
    
    return (
        <div className="bgColor1">
             <Navbar className="bgColor1 navSpacer" >
                
                
                <Col className="col col-1">
                    
                </Col>
                <Col className="col col-1 text-white">
                    <Button className="bgColor btn-lg" href="/home">
                    
                        GameHop
                    
                    </Button>
                </Col>
                
                <Col className="col col-8 bgColor1 justify-content">
                
                </Col>
                <Col className="col col-2  align-left ms-auto">
                    <OffCanvasNav />
                </Col>

            </Navbar> 

           


        </div>
    )
}

export default MyNav
