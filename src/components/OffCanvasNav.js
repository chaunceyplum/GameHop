import React, { useState } from 'react'
import { Button, Col, Container, Nav, NavItem, NavLink, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

const OffCanvasNav = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    
    return (
        <Col className="bgColor1 ml-auto ">
            <Button className="btn btn-lg bgColor" onClick={handleShow}>
                <FaBars />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>

                <OffcanvasHeader className="bgColor1" closeButton>
                    <OffcanvasTitle className="text-white">
                        GameHop
                    </OffcanvasTitle>
                </OffcanvasHeader>

                <OffcanvasBody className="bgColor">
                    <Nav className="flex-column navbar-nav justify-content "  >
                        <NavItem>
                            <NavLink className="text-center text-white navSpacer font" href="/home">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-center text-white navSpacer font" href ="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-center text-white navSpacer font" href="/shop">
                                Shop
                            </NavLink>
                        </NavItem>   

                    </Nav>
                </OffcanvasBody>
            </Offcanvas>
    

        </Col>
    )
}

export default OffCanvasNav
