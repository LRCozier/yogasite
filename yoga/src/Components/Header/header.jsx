import React, { useState } from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = () =>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
        <div>
            <header>
                <nav className={`nav ${isOpen ? 'nav-open' : ''}`}> {/*NAVBAR FOR TABLET/DESKTOP DISPLAY*/}
                    <ul className="navbar-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/classes">Classes</Link></li>
                        <li><Link to="/yogaeducation">Yoga In Education</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div className="hamburger" onClick={toggleMenu}> {/*HAMBURGER MENU FOR MOBILE DISPLAY*/}
                 <div className={`bar ${isOpen ? 'bar-open' : ''}`}></div>
                 <div className={`bar ${isOpen ? 'bar-open' : ''}`}></div>
                 <div className={`bar ${isOpen ? 'bar-open' : ''}`}></div>
                </div>
            </header>
        </div></>
    )
}

export default Header;