import React from 'react';
import ReactPlayer from 'react-player';
import { Subheader__text, Hero__title } from '../../Components/StyledText.js';
import ActionBanner from '../../Components/ActionBanner.js';

function AZYouth_Apr16() {
  return (
    <div>
        <div className='event__hero'>
        <span className='hero__subheader'>
            <Subheader__text>Mesa, AZ</Subheader__text> 
            <Subheader__text>10AM-12PM</Subheader__text> 
            <Subheader__text>April 16, 2022</Subheader__text> 
        </span>
        <Hero__title>AZ<br/>YOUTH<br/>REVIVAL<br/>03.19.2022</Hero__title>
        </div>

        <div className='event__wrapper'>
        <span className='event__container'>
            <hr className='line'/>
            <small>04.16.2022</small>
            <h4 className='event__title'>AZ YOUTH REVIVAL - 2022</h4>
        </span>
        <span className='event__container'>
            <ReactPlayer
            width='100%'
            height='100%'
            controls
            url='./ImageAssets/upcomingEvent__movie.mov'/>
        </span>
        </div>

        <div className='hero__banner'>
            <p>Hang out with the AZ Youth event team and other youth! Eat great food, chat with friends or make new ones.</p>
            <br />
            <br />
            <p>Address: 450 W 4th PL, Mesa, AZ 85201</p>
            <br />
            <p>Time: 5pm-7pm MST</p>
            <br /> <br />
            <h3>AFTER-PARTY @ 7PM</h3>
        </div>

        <ActionBanner title='VIEW UPCOMING EVENTS' buttonText='UPCOMING EVENTS' toLink='/Upcoming-events'/>

    </div>
  )
}

export default AZYouth_Apr16