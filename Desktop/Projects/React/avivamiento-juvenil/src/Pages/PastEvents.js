import React from 'react';
import '../Styling/PastEvents.css';
import { Subheader__text, Hero__title } from '../Components/StyledText';
import ActionBanner from '../Components/ActionBanner.js';
import EventBox from '../Components/EventBox.js';

function PastEvents() {
  return (
    <div className='pastEvents'>
        <span className='hero__subheader'>
            <Subheader__text>PHX, AZ</Subheader__text>
            <Subheader__text>MMXXII</Subheader__text>
            <Subheader__text>YOUTH MINISTRY</Subheader__text> 
        </span>
        <Hero__title>PAST<br/>EVENTS</Hero__title>
        <p className='hero__description'>Bringing many together to worship and get to know the creator of all things.</p>

        <a href='/events/AYR-11-2021' className='eventBox__wrapper'>
          <EventBox date='NOVEMBER 6, 2021' title='AZ YOUTH REVIVAL 2021' description='Among the fear and doubt 2021 was surrounded by, we hosted the first of many events and had a great turnout of youth seeking the presence of the Lord.' />
        </a>

        <ActionBanner title='VIEW UPCOMING EVENTS' buttonText='UPCOMING EVENTS' toLink='/Upcoming-events'/>

    </div>
  )
}

export default PastEvents;
