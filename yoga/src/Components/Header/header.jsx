import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
        <div>
            <header>
                <div className="site-logo-container">
                    <h2>Yogi Claire</h2>
                </div>
            </header>
        </div></>
    )
}

export default Header;