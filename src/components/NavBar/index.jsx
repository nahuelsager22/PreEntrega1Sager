import React from "react"
import logo from '../images/logo.jpg'
import { CartWidget } from "../CartWidget"

const NavBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <img src={logo} alt="logo" className="logo" />
                    <a class="navbar-brand" href="#" >SABORES DEL SUR</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#" style={{ color: "white" }}>SOBRE NOSOTROS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" style={{ color: "white" }}>NUESTROS PRODUCTOS</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                                    CONTACTO
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled"><CartWidget/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export { NavBar }