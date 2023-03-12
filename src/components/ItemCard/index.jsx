import React, { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const Item = ({ name, price, id, img, clave, onClick }) => {
    const [cart, setCart] = useContext(CartContext);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    const addToCart = () => {
        setCart((currItems) => {
            const isItemsFound = currItems.find((item) => item.id === id);
            if (isItemsFound) {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currItems, { id, quantity: 1, price }];
            }
        });
    };

    const removeItem = (id) => {
        setCart((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
    };
    const navigate = useNavigate()
    const quantityPerItem = getQuantityById(id);

    return (

        <Container>
            <Row >
                <Col className="g-4">
                    <Card style={{ width: '18rem' }} className="text-center mx-auto">
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                $ {price}
                            </Card.Text>
                            {quantityPerItem === 0 ? (
                                <Button variant="outline-dark" onClick={() => addToCart()}>
                                    + Añadir al carrito
                                </Button>
                            ) : (
                                <Button variant="outline-success" onClick={() => addToCart()}>
                                    +
                                </Button>
                            )}
                            {quantityPerItem > 0 && (
                                <Button variant="outline-danger" onClick={() => removeItem(id)}>
                                    -
                                </Button>
                            )}
                            {quantityPerItem > 0 && (
                                <div className="item-quantity">{quantityPerItem}</div>
                            )}
                            <Button variant="outline-success" onClick={() => navigate(`/item/${id}`)}>
                                Ir al detalle
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};

export { Item }