import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
<div className="header">
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/service">Service</NavLink >
                <NavLink  to="/about">About</NavLink >
                <NavLink to="/contact">Contact Us</NavLink >
            </nav>
        </div>
    );
};

export default Header;