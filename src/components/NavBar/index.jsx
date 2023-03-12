import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { Badge, Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { CartWidget } from '../CartWidget'

const NavBar = () => {
    const [cart, setCart] = useContext(CartContext);

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
                        <CartWidget></CartWidget>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export { NavBar }