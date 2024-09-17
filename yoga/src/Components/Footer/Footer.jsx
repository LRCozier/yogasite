import React from 'react';
import './footer.css';
import { SocialIcon } from 'react-social-icons'

const Footer = () => {

    return (
        <>
        <footer>
            <p>&copy; Yoga With Claire 2024</p>
            <div className='socials'>
            <SocialIcon network='instagram' />
            <SocialIcon network='facebook' />
            <p>Designed & Built by Luke Rudderham-Cozier</p>
            </div>
        </footer>
        </>
    )
}

export default Footer;