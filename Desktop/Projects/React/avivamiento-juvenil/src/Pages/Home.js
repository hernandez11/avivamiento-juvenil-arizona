import React from 'react';
import '../Styling/Home.css';
import { Subheader__text, Hero__title } from '../Components/StyledText';
import Principles from '../Components/Principles';
import ActionBanner from '../Components/ActionBanner.js';

function Home() {
    return (
        <div className='home'>
                <div className='hero__subheader'>
                    <Subheader__text>PHX, AZ</Subheader__text>
                    <Subheader__text>MMXXII</Subheader__text>
                    <Subheader__text>MINISTRY</Subheader__text> 
                </div>
                <Hero__title>ARIZONA<br/>YOUTH REVIVAL<br/>MINISTRY</Hero__title>
                
                <img className='subHeroImage' src='./ImageAssets/testimage00.jpg' alt='' />

                <div className='hero__banner'>
                    <p>Helping young people discover their purpose on earth, and to have their lives quickend and directed by the Holy Spirit.</p>
                    {/* <br/>Ayudando a la generación juvenil a descubrir el propósito de Dios para sus vidas. Y activando alma y espíritu por medio del Espíritu Santo.</p> */}
                    <h2>VISIT US</h2>
                    <a href='/Upcoming-Events'>
                    <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="home__button__text">UPCOMING EVENTS</span>
                    </button>
                    </a>
                </div>
                <Principles />
                <ActionBanner title='VISIT US' buttonText='UPCOMING EVENTS' toLink='/Upcoming-Events'/>
                <p className='home__description'>Arizona Youth Revival hosts local events across the valley for youth seeking the precense of God. All are welcome and we encourage you to join us on one of our monthly events for a night full of worship, prayer, and companionship. God will give you strength for every battle, wisdom for every decision, and peace that  surpasses understanding.</p>
        </div>
    )
}

export default Home
