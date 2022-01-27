import React from 'react';
import '../Styling/ActionBanner.css';

function ActionBanner( {title, buttonText, toLink} ) {
  return(
  <div className='actionBanner'>
      <div className='banner__container'>
        <h2>{title}</h2>
        <a href={toLink}>
        <button className = "learn-more">
            <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
            </span>
            <span class="button-text">{buttonText}</span>
        </button>
        </a>
      </div>
  </div>
  )
}

export default ActionBanner;
