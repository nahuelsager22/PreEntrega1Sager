import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/ShoppingCartContext";
import { Badge, Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { CartWidget } from '../CartWidget'

const NavBar = () => {
    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    const navigate = useNavigate()

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Navbar.Brand onClick={() => navigate(`/`)}>SABORES DEL SUR</Navbar.Brand>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate(`/category/pizzas`)}>Pizzas</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate(`/category/empanadas`)}>Empanadas</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate(`/category/sandwichs`)}>Sandwichs</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate(`/category/plato`)}>Al plato</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate(`/category/postres`)}>Postres</NavDropdown.Item>
                        </NavDropdown>
                        <Link to={"/cart"} >
                            <Button variant="dark">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="rgba(255,255,255,1)" /></svg><Badge bg="dark"><div>{quantity}</div></Badge>
                            </Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export { NavBar }