import React from 'react';
import './Header.css'
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className="bg fixed-top">
                <Navbar expand="lg" >
                    <Container className="me-auto ">
                        <NavLink to="/">
                            <img src="./images/logo.png" alt="" width="200" height="50" />
                        </NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/explore" className="text-decoration-none text fw-bold fs-5 px-2 mx-auto">
                                    Explore
                                </Link>


                                {user.email && <Link className="text-decoration-none text fw-bold fs-5 px-2" to="/addproducts">
                                    Add A Product
                                </Link>}
                                {user.email && <Link to="/singup"><span className="fas fa-user-circle text fw-bold fs-5 p-2"> {user.displayName}</span></Link>}
                                {user.email ?
                                    <Button className="" onClick={logOut} variant="warning">Log Out</Button>

                                    :
                                    <Link to="/singup" className="text-decoration-none text fw-bold fs-5 px-2 mx-auto">
                                        Sing In/Log In
                                    </Link>}



                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>


        </div>
    );
};

export default Header;