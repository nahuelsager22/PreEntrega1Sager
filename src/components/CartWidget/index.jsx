import React from "react";
import { FaOpencart } from "react-icons/fa";

const CartWidget = ({ text }) => {
    return (
        <div>
            <FaOpencart className="cartWidget" />
            <b className="cartNumber">22</b>
        </div>
    )
}

export { CartWidget }