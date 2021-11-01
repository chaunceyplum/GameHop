import React, { useState } from 'react'
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'react-bootstrap'
import { NavbarToggler } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

const MyNav = (props) => {
    
    const [isOpen,setisOpen] = useState(false)
    const toggle = () => setisOpen(!isOpen)
    
    
    return (
        <div>
            <Navbar style={{backgroundColor: 'darkgrey'}} dark>
                <NavbarBrand className="text-center" href = "/">
                    GameHop
                </NavbarBrand>
                <NavbarToggler onClick = {toggle} />
                {/* <Collapse open = {isOpen} navbar> */}
                    <Nav className="ms-auto navbar-nav justify-content " style={{backgroundColor: 'darkgrey'}} navbar>
                        <NavItem>
                            <NavLink href="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href ="/About">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Shop">
                                Shop
                            </NavLink>
                        </NavItem>
                        <Button className="btn-lg btn btn-dark">
                            Cart
                        </Button>

                    </Nav>
                {/* </Collapse> */}


            </Navbar>
            
        </div>
    )
}

export default MyNav
