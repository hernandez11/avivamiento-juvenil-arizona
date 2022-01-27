import React from 'react';
import '../Styling/Upcoming.css';
import { Subheader__text, Hero__title } from '../Components/StyledText';
import ActionBanner from '../Components/ActionBanner.js';

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
           
           <div className='uEvent__container'>
               {/* line */}
               <hr className='line'/>
               <h4 className='uEvent__title'>AZ YOUTH REVIVAL 2022</h4>
               <h2 className='uEvent__description'>COMING SOON...</h2>
           </div>

            <ActionBanner title='VIEW PAST EVENTS' buttonText='PAST EVENTS' toLink='/Past-Events'/>
        </div>
      )
}

export default Upcoming;
