import React from 'react';
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {

    const {user, logOut} = useAuth();

    const activeStyle={
        fontWeight: "bold", 
        color: "#212529",  
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",  
        padding: "8px 20px"
    };
    return (
        <>
        <div className="top-bar fluid align-items-center pb-2 pt-2 w-100">
            <Row className="fluid m-auto align-items-center container w-100 ">
                <Col className=" d-flex justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center" xs={12} md={6} lg={6}>                       
                    <ul className="footer-icon text-white d-flex justify-content-sm-center">
                        <li><i className="fas fa-phone"> 1111-2222-3333 </i></li>
                        <li><i className="fab fa-facebook"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-youtube"></i></li>
                    </ul>
                </Col>
                <Col className=" d-flex justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center" xs={12} md={6} lg={6}>
                    {/* <Link 
                            className="menu-text text-light"
                            activeStyle={activeStyleTop} to="/login"><i className="far fa-user pe-2 signIn-hr1"></i>Login
                    </Link> */}
                     <Navbar.Text className="">
                        <img className="profile-img" src={user?.photoURL} alt="" />
                        <a className="profile-name" href="/login">{user?.displayName}</a>
                    </Navbar.Text>
                    {user?.email? 
                        <Button className="logout-btn my-1" onClick={logOut} variant="">LogOut</Button>:
                        <Link
                        className="menu-text text-light"
                        activeStyle={activeStyle} to="/login"><i className="far fa-user pe-2 signIn-hr1"></i>Login
                        </Link>}                  
                </Col>
            </Row>
        </div>
        <Navbar bg="light" variant="dark" collapseOnSelect expand="lg" className="fluid header-navbar ">
            <Container>
            <Link to="/home">
                <Navbar.Brand href="/home" className="d-flex">
                        <Link to="/home"><img
                            src="https://i.ibb.co/n0JNFyC/logo.png"
                            width="150"
                            height="50"
                            className="w-100"
                            alt="React Bootstrap logo"
                        /> </Link>{' '}
                        <h2 className="w-100 text-dark p-1">Minor Hotel</h2>
                    </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink 
                            className="menu-text"
                            activeStyle={activeStyle} to="/home">Home
                        </NavLink>
                        <NavLink 
                            className="menu-text"
                            activeStyle={activeStyle} to="/placeOrder">Place Order
                        </NavLink>
                        <NavLink 
                            className="menu-text"
                            activeStyle={activeStyle} to="/addServices">Add Services
                        </NavLink>
                        <NavLink
                        className="menu-text"
                        activeStyle={activeStyle}
                         as={Link}to="/blogs">Blogs</NavLink>
                        <NavLink
                        className="menu-text"
                        activeStyle={activeStyle}
                         as={Link}to="/contact">Contact</NavLink>
                        {/* {user?.email? 
                        <Button className="logout-btn mx-2" onClick={logOut} variant="">LogOut</Button>:
                            <Nav.Link
                            className="menu-text"
                            activeStyle={activeStyle} as={Link}to="/signIn">Login</Nav.Link>} */}
                    <Navbar.Text className="menu-text">
                        {/* <img className="profile-img" src={user?.photoURL} alt="" /> */}
                        {/* <a href="/login">{user?.displayName}</a> */}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default Header;