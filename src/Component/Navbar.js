import React from "react";

import '../styles/Navbar.css';
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";


function Navbar (){
    return(
        <div className="Header-nav">
            <div className="logo-nav">
                <h1>Whatsapp</h1>
                <FaWhatsapp className="icon"/>
            </div>
            <ul className="nav">
                <li><Link to="/login" >Login</Link></li>
                <li><Link to="/register">Signup</Link></li>
            </ul>
        </div>


    )
}
export default Navbar;