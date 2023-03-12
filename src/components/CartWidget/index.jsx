import { useContext } from "react";
import { Badge, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CartContext } from "../../contexts/CartContext";


const CartWidget = () => {

    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    return (
        <Link to={"/shoppingcart"} >
            <Button variant="dark">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="rgba(255,255,255,1)" /></svg><Badge bg="dark"><div>{quantity}</div></Badge>
            </Button>
        </Link>
    )
}

export { CartWidget }