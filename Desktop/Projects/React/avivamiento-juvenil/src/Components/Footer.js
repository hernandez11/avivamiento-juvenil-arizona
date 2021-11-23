import React from 'react';
import '../Styling/Footer.css';
import { Link } from "react-router-dom";

function Footer() {

    return (
        <div className='footer'>
            <div className='footer_infoItems'>
                <span className='info__item'>
                    <h3>Connect With Us</h3>
                    <div className='info__Item__social'>
                        <a href="mailto:Arizonayouthrevivalministry@gmail.com">
                        <img className='social__icon'
                        src='./ImageAssets/gmail.png'
                        alt='' />
                        </a>
                        <a href='https://www.instagram.com/arizonayouthrevival/' target="_blank" rel="noopener noreferrer">
                        <img className='social__icon'
                        src='./ImageAssets/instagram.png'
                        alt='' />
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100073055589001' target="_blank" rel="noopener noreferrer">
                        <img className='social__icon'
                        src='./ImageAssets/facebook.png'
                        alt='' />
                        </a>
                    </div>
                </span>
                <span className='info__item'>
                    <h3>Contact Us</h3>
                    <p>Arizonayouthrevivalministry@gmail.com</p>
                </span>
                <a href='https://www.eventbrite.com/e/181349680777?aff=efbneb' target="_blank" rel="noopener noreferrer" 
                className='info__item'>
                    
                    <button>Register</button>
                </a>
            </div>
            <Link to='/' className='footer__lower'>
                <img className='lower__logo__img'
                src='../ImageAssets/logo__main.png'
                alt='' />

                <h2 className='lower__title'>ARIZONA YOUTH<br/>REVIVAL<br/>MINISTRY</h2>
            </Link>
            <p className='footer__copyright'>Copyright @ Arizona-Youth-Revival-Ministry. All rights reserved</p>
        </div>
    )
}

export default Footer
