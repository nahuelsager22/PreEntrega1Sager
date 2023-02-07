import { Button, Card } from "react-bootstrap"

const Contact = () => {

    return (
        <div className="container" style={{ width: '18rem' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Nuestras redes:</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>Instagram</li>
                            <li>WhatsApp</li>
                            <li>Facebook</li>
                        </ul>
                    </Card.Text>
                    <Button variant="primary" >
                        LLAMAR
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

const Nosotros = () => {

    return (
        <div className="container" style={{ width: '18rem' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Sabores del Sur</Card.Title>
                    <Card.Text>
                        Somos un local ubicado en plena costanera con una impresionante vista al lago. <br />
                        Ofrecemos servicio de Restaurant, Cafetería y Heladería
                    </Card.Text>
                    <Button variant="primary" href="/">
                        VOLVER
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export { Contact, Nosotros }