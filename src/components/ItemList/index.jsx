import React from "react";
import { Item } from "../ItemCard";
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { itemService } from '../../services/items'
import { Card, Col, Container, Row } from "react-bootstrap";


const ItemList = () => {

    const [items, setItems] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        itemService.getAll("home").then((data) => setItems(data))
    }, [])
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);
    return (
        <>
            <Container>
                <Row md={3} >
                    {
                        items.map((product, idx) => {
                            return <Item key={product.id} {...product} />;
                        })
                    }
                </Row>
            </Container>
        </>
    );
};

export { ItemList }