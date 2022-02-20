import React, { useState } from 'react';
import '../Styling/Header.css';
import { NavLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className='header'>
            <nav className="header__navbar" id={click ? 'menuClicked':''}>
                <div className='header__navbar__top'>
                    <NavLink exact to="/" className="header__logo">
                        <img className='header__logo' src='../ImageAssets/logo__main.png' alt='' />
                    </NavLink>

                    <a href='https://docs.google.com/forms/d/e/1FAIpQLScd9OOgzy0j0ovVCecL15abD_MNSUKvXSz747w3P3l3DqRllw/viewform' target="_blank" rel="noopener noreferrer" className='header__links'>
                        <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                            </span>
                            <span className="header__button__text">VOLUNTEER</span>
                        </button>
                        {/* <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                            </span>
                            <span className="header__button__text">DONATE</span>
                        </button> */}
                    </a>    

                    <div onClick = {handleClick} className='header__icon'>            
                        <button>
                            <MenuIcon style={{ fontSize: 30 }} id= {click ? 'hideIcon':'displayIcon'}/>
                            <CloseIcon style={{ fontSize: 30 }}id= {click ? 'displayIcon':'hideIcon'}/>
                        </button>
                    </div>
                </div>
                
                <div>
                    <ul className={click ? 'header__menu__active':'header__menu__inactive'}>
                        <li className='menu__item'>
                            <NavLink exact to="/" activeClassName="active" className="header__links" onClick={() => setClick (false)}>
                                HOME
                            </NavLink>
                        </li>
                        <li className='menu__item'>
                            <NavLink exact to="/Upcoming-Events" activeClassName="active" className="header__links" onClick={() => setClick (false)}>
                                UPCOMING EVENTS
                            </NavLink>
                        </li>
                        <li className='menu__item'>
                            <NavLink exact to="/Past-Events" activeClassName="active" className="header__links" onClick={() => setClick (false)}>
                                PAST EVENTS
                            </NavLink>
                        </li>
                        <li className='menu__item'>
                            <NavLink exact to="/Meet-The-Founder" activeClassName="active" className="header__links" onClick={() => setClick (false)}>
                                MEET THE FOUNDER
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
