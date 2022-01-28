import React from 'react';
import '../Styling/Event.css';
import { Subheader__text, Hero__title } from '../Components/StyledText';
import ActionBanner from '../Components/ActionBanner.js';

function Event() {
    return (
        <div>
            <div className='event__hero'>
                <span className='hero__subheader'>
                    <Subheader__text>PHX, AZ</Subheader__text> 
                    <Subheader__text>2PM - 9PM</Subheader__text> 
                    <Subheader__text>NOV 06, 2021</Subheader__text> 
                </span>
                <Hero__title>AZ<br/>YOUTH<br/>REVIVAL<br/>11.2021</Hero__title>
                {/* <p className='hero__description'>Bringing many together to worship and get to know the creator of all things.</p> */}
            </div>

            <div className='event__wrapper'>
                <span className='event__container'>
                    <hr className='line'/>
                    <small>11.06.2021</small>
                    <h4 className='event__title'>AZ YOUTH REVIVAL - 2021</h4>
                    <p className='event__description'>Among the fear and doubt 2021 was surrounded by, we hosted the first of many events and had a great turnout of youth seeking the presence of the Lord.</p>
                </span>
                <span className='event__container'>
                    <img className='event__main__img' src='../ImageAssets/event__image40.JPG' alt='' />
                </span>
            </div>

            <div className='hero__banner'>
                <p>Helping young people discover their purpose on earth, and to have their lives quickend and directed by the Holy Spirit.</p>
            </div>

            <div className='icon__container'>
                <span className='icon__wrapper'>
                    <img className='event__icon' src='../AZ11-2022-assets/guitar-icon.png' alt='' />
                    <p className='event__icon__title'>Music</p>
                </span>
                <span className='icon__wrapper'>
                    <img className='event__icon' src='../AZ11-2022-assets/worship-icon.png' alt='' />
                    <p className='event__icon__title'>Worship</p>
                </span>
                <span className='icon__wrapper'>
                    <img className='event__icon' src='../AZ11-2022-assets/prayer-icon.png' alt='' />
                    <p className='event__icon__title'>Prayer</p>
                </span>
            </div>

            <div className='event__wrapper'>
                <span className='event__container'>
                    <h3>SPECIAL GUEST</h3>
                    <img className='event__guest__img' src='../ImageAssets/event_00_guest.jpg' alt='' />
                </span>
                <span className='event__container'>
                    <h2>+ Abner L. Himely</h2>
                    <small>INDIANA, INDIANAPOLIS</small>
                    <p>Abner pastors a church in Indiana Indianapolis named Casa De Restauracion. From a young age he was called to serve in the ministry and spread the gospel. He will be joining us as a special guest for this event and you dont want to miss it.</p>
                </span>
            </div>

            <ActionBanner title='VIEW UPCOMING EVENTS' buttonText='UPCOMING EVENTS' toLink='/Upcoming-events'/>
        </div>
    )
}

export default Event
