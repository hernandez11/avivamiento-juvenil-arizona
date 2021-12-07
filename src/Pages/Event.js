import React from 'react';
import VideoPlayer from 'react-video-js-player';
import '../Styling/Event.css';
import PromoVid from '../Assets/event_00_promo.mov';
import { Subheader__text, Hero__title } from '../Components/StyledText';
import Principles from '../Components/Principles';

function Event() {
    const videoSrc = PromoVid;
    const poster = '';

    return (
        <div className='event'>
            <div className='event__hero'>
                <span className='hero__subheader'>
                    <Subheader__text>PHX, AZ</Subheader__text> 
                    <Subheader__text>2PM - 9PM</Subheader__text> 
                    <Subheader__text>NOV 06, 2021</Subheader__text> 
                </span>
                <Hero__title>ARIZONA<br/>YOUTH REVIVAL<br/>MINISTRY</Hero__title>
                
                <p>Bringing many together to worship and getting to know the creator of all things</p>
                <a href='https://www.eventbrite.com/e/181349680777?aff=efbneb' target="_blank" rel="noopener noreferrer">
                <button className='register__button'>
                    REGISTER
                </button>
                </a>
            </div>

            <VideoPlayer className='event_promoVideo'
                    controls={true}
                    src={videoSrc}
                    poster={poster}
            />

            <div className='home__banner'>
                <p>Helping young people discover their purpose on earth, and to have their lives quickend and directed by the Holy Spirit.<br/>
                <br/>Ayudando a la generación juvenil a descubrir el propósito de Dios para sus vidas. Y activando alma y espíritu por medio del Espíritu Santo.</p>
            </div>
            <Principles />
            <div className="event_pictures row_1">
                <ul>
                    <li class="event_image1"><div class="bg"></div></li>
                    <li class="event_image2"><div class="bg"></div></li>
                    <li class="event_image3"><div class="bg"></div></li>
                    <li class="event_image4"><div class="bg"></div></li>
                    <li class="event_image5"><div class="bg"></div></li>
                    <li class="event_image6"><div class="bg"></div></li>
                    <li class="event_image7"><div class="bg"></div></li>
                    <li class="event_image8"><div class="bg"></div></li>
                </ul>
            </div>
            <div className="event_pictures row_2">
                <ul>
                    <li class="event_image9"><div class="bg"></div></li>
                    <li class="event_image10"><div class="bg"></div></li>
                    <li class="event_image11"><div class="bg"></div></li>
                    <li class="event_image12"><div class="bg"></div></li>
                    <li class="event_image13"><div class="bg"></div></li>
                    <li class="event_image14"><div class="bg"></div></li>
                    <li class="event_image15"><div class="bg"></div></li>
                    <li class="event_image16"><div class="bg"></div></li>
                </ul>
            </div>
            <div className="event_pictures row_3">
                <ul>
                    <li class="event_image17"><div class="bg"></div></li>
                    <li class="event_image18"><div class="bg"></div></li>
                    <li class="event_image19"><div class="bg"></div></li>
                    <li class="event_image20"><div class="bg"></div></li>
                    <li class="event_image21"><div class="bg"></div></li>
                    <li class="event_image22"><div class="bg"></div></li>
                    <li class="event_image23"><div class="bg"></div></li>
                    <li class="event_image24"><div class="bg"></div></li>
                </ul>
            </div>
            <div className="event_pictures row_4">
                <ul>
                    <li class="event_image25"><div class="bg"></div></li>
                    <li class="event_image26"><div class="bg"></div></li>
                    <li class="event_image27"><div class="bg"></div></li>
                    <li class="event_image28"><div class="bg"></div></li>
                    <li class="event_image29"><div class="bg"></div></li>
                    <li class="event_image30"><div class="bg"></div></li>
                    <li class="event_image31"><div class="bg"></div></li>
                    <li class="event_image32"><div class="bg"></div></li>
                </ul>
            </div>
            <div className="event_pictures row_5">
                <ul>
                    <li class="event_image33"><div class="bg"></div></li>
                    <li class="event_image34"><div class="bg"></div></li>
                    <li class="event_image35"><div class="bg"></div></li>
                    <li class="event_image36"><div class="bg"></div></li>
                    <li class="event_image37"><div class="bg"></div></li>
                    <li class="event_image38"><div class="bg"></div></li>
                    <li class="event_image39"><div class="bg"></div></li>
                    <li class="event_image40"><div class="bg"></div></li>
                </ul>
            </div>
            <div className="event_pictures row_6">
                <ul>
                    <li class="event_image41"><div class="bg"></div></li>
                    <li class="event_image42"><div class="bg"></div></li>
                    <li class="event_image43"><div class="bg"></div></li>
                    <li class="event_image44"><div class="bg"></div></li>
                </ul>
            </div>

                {/* Event pictures */}
            <h1 className='section__title'>EVENT SCHEDULE</h1>
            <div className='event__schedule'>
                <ul className='event__schedule__list'>
                    <li className='list__item'>2p-5p  Conference & Worship</li>
                    <li className='list__item'>5p-7p Dinner break<small>*Food sold on site*</small></li>
                    <li className='list__item'>7p-9p Worship night with special guest</li>
                </ul>
            </div>
            <div className='event__itin'>
                <div className='event__itin_col'>
                    <p>Music</p>
                    <p>Prayer</p>
                </div>
                <div className='event__itin_col'>
                    <p>Worship</p>
                    <p>Food</p>
                </div>
            </div>

            <div  className='event__guest'>
                <h1 className='section__title'>SPECIAL GUEST</h1>
                <img className='event__guest__img'
                src='./ImageAssets/event_00_guest.jpg'
                alt='' />

                <h2>ABNER HIMELY<br/><small className=''>Pastor - Indianapolis, Indiana</small></h2>
                <h1>+</h1>
            </div>
    
            <div className='event__ticket_reg' >
                <img
                src='./ImageAssets/event__ticket__img.png'
                alt=''
                />
                <a href='https://www.eventbrite.com/e/181349680777?aff=efbneb' target="_blank" rel="noopener noreferrer">
                    <button className='ticket__button'>
                        REGISTER
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Event
