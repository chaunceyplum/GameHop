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
                <Col className="col col-2">
                    <OffCanvasNav />
                </Col>
                <Col className="col col-9 bgColor1">
                
                </Col>


            </Navbar> 

            {/* <Navbar>
                <Link to="#">
                    icon
                </Link>
                <Nav>
                    <ul>
                        <li>
                            <Link to='#'>
                                icon
                            </Link>
                        </li>
                        {
                            data.map((navItem, index) => {
                                return(
                                    <li key={index} className={navItem.className}>
                                        <Link path={navItem.path}>
                                            {navItem.icon}
                                            <span>
                                                {navItem.title}
                                            </span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Nav>

            </Navbar> */}



        </div>
    )
}

export default MyNav
