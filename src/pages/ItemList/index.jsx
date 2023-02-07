import { useEffect, useState } from 'react'
import { SearchForm, ItemCard } from '../../components';
import { productos } from "../../data/productos"
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate, Link, useSearchParams } from 'react-router-dom';

const ItemList = () => {
    const [itemList, setItemList] = useState(productos);
    const [query, setQuery] = useState("")

    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams({})

    useEffect(() => {
        let newArray = productos.filter(
            (prod) =>
                prod.name.includes(searchParams.get("name")) ||
                searchParams.get("name") === ""
        )
        setItemList(newArray)
    }, [searchParams])

    useEffect(() => {
        setSearchParams(query)
    }, [query, setSearchParams])

    return (

        <Container>
            <div className="my-4">
                <SearchForm onChange={setQuery} />
            </div>
            <p>
                {searchParams.get("name")}
            </p>
            <Row>
                {itemList.map(
                    ({ id, name, image, description }) => {
                        return (
                            <Col key={name} md="4">
                                <ItemCard
                                    image={image}
                                    name={name}
                                    description={description}
                                    onClick={() => navigate(`/item/${id}`)}
                                />
                            </Col>
                        )
                    }
                )}
            </Row>
        </Container>
    )
}

export { ItemList }