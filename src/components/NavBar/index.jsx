import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { CartWidget } from '../../components'


const NavBar = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Navbar.Brand href="/">SABORES DEL SUR</Navbar.Brand>
                        <Nav.Link href="/category/nosotros">SOBRE NOSOTROS</Nav.Link>
                        <Nav.Link href="/category/contact">CONTACTO</Nav.Link>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export { NavBar }