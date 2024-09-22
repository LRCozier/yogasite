import {useState} from "react";
import { Link } from "react-router-dom";
import './header.css';

const Navbar = () =>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
            <div className="navbar-container">
                <nav className={`nav ${isOpen ? 'nav-open' : ''}`}> {/*NAVBAR FOR TABLET/DESKTOP DISPLAY*/}
                    <ul className="navbar-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/classes">Classes</Link></li>
                        <li><Link to="/yogaeducation">Yoga In Education</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <nav className="hamburger-menu-mobile">
                <div className="hamburger" onClick={toggleMenu}> {/*HAMBURGER MENU FOR MOBILE DISPLAY*/}
                 <div className={`bar ${isOpen ? 'bar-open' : ''}`}></div>
                 <div className={`bar ${isOpen ? 'bar-open' : ''}`}></div>
                 <div className={`bar ${isOpen ? 'bar-open' : ''}`}></div>
                </div>
                </nav>
                </div>
    )

}
    


export default Navbar;