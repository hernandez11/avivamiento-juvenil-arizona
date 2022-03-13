import React from 'react';
import ReactPlayer from 'react-player';
import { Subheader__text, Hero__title } from '../../Components/StyledText.js';
import ActionBanner from '../../Components/ActionBanner.js';

function AZYouth_Feb19() {
  return (
  <div>
    <div className='event__hero'>
      <span className='hero__subheader'>
          <Subheader__text>PHX, AZ</Subheader__text> 
          <Subheader__text>5PM - 7PM</Subheader__text> 
          <Subheader__text>Feb 19, 2022</Subheader__text> 
      </span>
      <Hero__title>AZ<br/>YOUTH<br/>REVIVAL<br/>02.2022</Hero__title>
    </div>

    <div className='event__wrapper'>
      <span className='event__container'>
          <hr className='line'/>
          <small>02.19.2022</small>
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
        <p>Join us for our first monthly event of the year. We want to share the love of Christ and spread the word to youth across Arizona. Bring a freind or two and join us on this special night! </p>
        <br />
        <br />
        <p>Address: 835 E Southern Ave, Mesa AZ 85204</p>
        <br />
        <p>Time: 5pm-7pm MST</p>
    </div>

    <ActionBanner title='VIEW UPCOMING EVENTS' buttonText='UPCOMING EVENTS' toLink='/Upcoming-events'/>

  </div>
  );
}

export default AZYouth_Feb19;
