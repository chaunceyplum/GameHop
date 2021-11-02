import React, { useState } from 'react'
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'react-bootstrap'
import { NavbarToggler } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

const MyNav = (props) => {
    
    const [isOpen,setisOpen] = useState(false)
    const toggle = () => setisOpen(!isOpen)
    
    
    return (
        <div className="bgColor1">
            <Navbar className="bgColor1" >
                <NavbarBrand className="text-center text-white" href = "/">
                    UNDEFEATED
                </NavbarBrand>
                <NavbarToggler onClick = {toggle} />
                {/* <Collapse open = {isOpen} navbar> */}
                    <Nav className="ms-auto navbar-nav justify-content "  >
                        <NavItem>
                            <NavLink className="text-center text-white" href="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-center text-white" href ="/About">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-center text-white" href="/Shop">
                                Shop
                            </NavLink>
                        </NavItem>
                        <Button className="btn-lg btn bgColor">
                            Cart
                        </Button>

                    </Nav>
                {/* </Collapse> */}


            </Navbar>
            
        </div>
    )
}

export default MyNav
