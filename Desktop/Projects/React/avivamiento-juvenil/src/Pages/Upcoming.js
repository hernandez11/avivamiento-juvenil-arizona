import React from 'react';
import '../Styling/Upcoming.css';
import { Subheader__text, Hero__title } from '../Components/StyledText';
import ActionBanner from '../Components/ActionBanner.js';
import ReactPlayer from 'react-player';
import EventBox from '../Components/EventBox.js';

function Upcoming() {
    return (
        <div className='upcoming'>
            <span className='hero__subheader'>
                <Subheader__text>PHX, AZ</Subheader__text>
                <Subheader__text>MMXXII</Subheader__text>
                <Subheader__text>YOUTH MINISTRY</Subheader__text> 
            </span>
            <Hero__title>UPCOMING<br/>EVENTS</Hero__title>
            <p className='hero__description'>Bringing many together to worship and get to know the creator of all things.</p>
           
            <div className='videoPlayer'>
            <ReactPlayer
                width='100%'
                height='100%'
                controls
                url='./ImageAssets/upcomingEvent__movie.mov'/>
            </div>

            <a href='/monthly-AZYouth-March19' className='eventBox__wrapper'>
                <EventBox date='03.19.2022' title='AZ Youth Revival Service' description='Join us for our upcoming monthly service' />
            </a>
            <a href='/monthly-AZYouth-Apr16' className='eventBox__wrapper'>
                <EventBox date='04.16.2022' title='AZ Youth Revival Service' description='Brunch Time! Hang out with the AZ Youth Revival team and other youth!' />
            </a>
            <a className='eventBox__wrapper empty'>
                <EventBox date='05.21.2022' title='AZ Youth Revival Service' description='Deatils coming soon...' />
            </a>
            {/* <a className='eventBox__wrapper empty'>
                <EventBox date='03.19.2022' title='AZ Youth Revival Service' description='Deatils coming soon...' />
            </a>
            <a className='eventBox__wrapper empty'>
                <EventBox date='03.19.2022' title='AZ Youth Revival Service' description='Deatils coming soon...' />
            </a> */}

            <ActionBanner title='VIEW PAST EVENTS' buttonText='PAST EVENTS' toLink='/Past-Events'/>
        </div>
      )
}

export default Upcoming;
