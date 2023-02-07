import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { itemService } from '../../services/items'
import { Button, Card } from "react-bootstrap"

const ItemDetail = () => {
    const [itemDetail, setItemDetail] = useState()

    const { itemDetailId } = useParams()

    useEffect(() => {
        itemService.get(itemDetailId).then((data) => setItemDetail(data))
    }, [itemDetailId])

    return (
        <div className="container" style={{ width: '18rem' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={itemDetail && itemDetail.image} width={"200px"} />
                <Card.Body>
                    <Card.Title>{itemDetail && itemDetail.name}</Card.Title>
                    <Card.Text>
                        {itemDetail && itemDetail.description}
                    </Card.Text>
                    <Button variant="primary" >
                        Pedir
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export { ItemDetail }