import React from 'react';
import '../Styling/Footer.css';
import { NavLink } from "react-router-dom";

function Footer() {

    return (
        <div className='footer'>
            {/* START LOGO */}
            <div className='footer__content__container'>
                    <a href='/' className='footer__start'>
                        <img className='footer__logo__img' src='../ImageAssets/logo__main.png' alt='' />
                        <h2 className='footer__title'>ARIZONA YOUTH<br/>REVIVAL MINISTRY</h2>
                    </a>
                {/* CENTRAL LINKS */}
                    <ul className='nav__wrapper'>
                    <li className='nav__item'>
                            <NavLink exact to="/" className="footer__link">
                                HOME
                            </NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink exact to="/Upcoming-events" className="footer__link">
                                EVENTS
                            </NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink exact to="/Meet-The-Founder" className="footer__link">
                                ABOUT
                            </NavLink>
                        </li>
                    </ul>
                {/* END SOCIAL LINKS */}
                <span className='socialIcon__container'>
                    <a href="mailto:Arizonayouthrevivalministry@gmail.com">
                        <img className='social__icon' src='../ImageAssets/gmail.png' alt='email' />
                    </a>
                    <a href='https://www.instagram.com/arizonayouthrevival/' target="_blank" rel="noopener noreferrer">
                        <img className='social__icon' src='../ImageAssets/instagram.png' alt='instagram' />
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100073055589001' target="_blank" rel="noopener noreferrer">
                        <img className='social__icon' src='../ImageAssets/facebook.png' alt='email' />
                    </a>
                </span>
            </div>
            <p className='footer__copyright'>Copyright @ Arizona-Youth-Revival-Ministry. All rights reserved</p>
        </div>
    )
}

export default Footer
