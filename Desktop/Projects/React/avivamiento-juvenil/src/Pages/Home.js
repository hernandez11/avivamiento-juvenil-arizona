import React from 'react';
import '../Styling/Home.css';
import { Subheader__text, Hero__title } from '../Components/StyledText';
import Principles from '../Components/Principles';

function Home() {
    return (
        <div className='home'>
             <div className='event__hero'>
                <span className='hero__subheader'>
                    <Subheader__text>PHX, AZ</Subheader__text> 
                    <Subheader__text>MINISTRY</Subheader__text> 
                </span>
                <Hero__title>AVIVAMIENTO<br/>JUVENIL</Hero__title>
                <h2>ARIZONA</h2>
                <div className='home__banner'>
                    <p>Helping young people discover their purpose on earth, and to have their lives quickend and directed by the Holy Spirit.<br/>
                    <br/>Ayudando a la generación juvenil a descubrir el propósito de Dios para sus vidas. Y activando alma y espíritu por medio del Espíritu Santo.</p>
                </div>

                <div className='home__events'>
                    <h1>UPCOMING EVENTS</h1>
                    <img
                    src='./ImageAssets/event__banner.jpg' 
                    alt=''
                    />
                    <a href='https://www.eventbrite.com/e/181349680777?aff=efbneb' target="_blank" rel="noopener noreferrer">
                    <button className='event__registerButton'>Register</button>
                    </a>
                </div>
                <Principles />
            </div>
        </div>
    )
}

export default Home
