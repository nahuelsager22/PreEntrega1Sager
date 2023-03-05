import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { itemService } from '../../services/items'
import { Button, Card, Placeholder, Container, Row, Col } from 'react-bootstrap';

const ItemDetail = () => {
    const [itemDetail, setItemDetail] = useState([])


    const { itemId } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        itemService.get(itemId).then((data) => setItemDetail(data))
    }, [itemId])

    return (
        <>
            <Container>
                <Row>
                    <Col key={itemDetail.id}>
                        <Card style={{ width: '28rem' }} className="text-center mx-auto">
                            <Card.Img variant="top" src={itemDetail.img} />
                            <Card.Body>
                                <Card.Title>{itemDetail.name}</Card.Title>
                                <Card.Text>
                                    {itemDetail.description}
                                </Card.Text>
                                <Card.Text>
                                    $ {itemDetail.price}
                                </Card.Text>
                                <Button onClick={() => navigate(`/`)} variant="outline-success">
                                    Volver
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container></>
    );
}

export { ItemDetail }