import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container } from 'react-bootstrap';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [orders, setOrders] = useState()

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    const totalPrice = cart.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0
    );

    const order = {
        buyer: {
            name: '',
            lastane: '',
            email: ''
        },
        items: [{ cart }],
        totalPrice
    }

    const handleClick = () => {
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        const response = addDoc(ordersCollection, order)
            .then(({ id }) =>  setOrders(id) )
        localStorage.setItem(order, JSON.stringify(order))
    }

    console.log(orders)

    return (
        <>
            <Card className="text-center">
                <Card.Header>RESUMEN</Card.Header>
                <Card.Body>
                    <Card.Title>TOTAL: $ {totalPrice}</Card.Title>
                    <Card.Text>
                        Articulos en en carrito: {quantity}
                    </Card.Text>
                    {/* <Button onClick={() => localStorage.setItem('cart', JSON.stringify(cart))} variant="success">Checkout</Button> */}
                </Card.Body>
                <Form>
                    <Container>
                        <FloatingLabel controlId="floatingInput" label="Nombre">
                            <Form.Control type="text" placeholder="Nombre" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Apellido">
                            <Form.Control type="text" placeholder="Apellido" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="e-mail" className="mb-3">
                            <Form.Control required type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="e-mail" className="mb-3">
                            <Form.Control required type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Container>
                    <Button variant="dark" onClick={handleClick} >
                        Realizar pedido
                    </Button>
                </Form>
                <Card.Header>Código de orden:</Card.Header>
                <Card.Body>
                    <Card.Title>{orders}</Card.Title>
                </Card.Body>
                <Card.Footer className="text-muted">¡Gracias por su compra!</Card.Footer>
            </Card>
        </>
    );
};

export { Cart }



