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
                        <img className='header__logo'
                        src='../ImageAssets/logo__main.png'
                        alt='' />
                    </NavLink>

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
                                Home
                            </NavLink>
                        </li>
                        <li className='menu__item'>
                            <NavLink exact to="/event" activeClassName="active" className="header__links" onClick={() => setClick (false)}>
                                Event
                            </NavLink>
                        </li>
                        <li className='menu__item'>
                            <NavLink exact to="/about-the-founder" activeClassName="active" className="header__links" onClick={() => setClick (false)}>
                                About The Founder
                            </NavLink>
                        </li>
                        <li className='menu__item'>
                            <a href='https://www.eventbrite.com/e/181349680777?aff=efbneb' target="_blank" rel="noopener noreferrer" activeClassName="active" className="header__links" onClick={() => setClick (false)}>
                                Register
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
