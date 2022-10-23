
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import CartWidget from "./Cart/cartWidget.jsx";

function NavBar() {
    
    return (
    
        <div className="Item">
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">MudArt</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/categoria/Decorativos">Decorativos</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/categoria/Utilitarios">Utilitarios</Link>
                    </li>
                </ul>
                </div>
                <CartWidget/>
            </div>
            </nav>
        </div>
    );
    }
    
    export default NavBar;