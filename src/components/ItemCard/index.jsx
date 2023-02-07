import { Button, Card } from 'react-bootstrap'

const ItemCard = ({
    id,
    name,
    image,
    description,
    onClick,
}) => {
    return (
        <Card onClick={onClick}>
            <Card.Img variant="top" src={image} height={"200em"} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" >
                    Pedir
                </Button>
            </Card.Body>
        </Card>
    )
}

export { ItemCard }