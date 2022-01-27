import React from 'react';
import '../Styling/EventBox.css';

function EventBox( { date, title, description} ) {
  return (
  <div className='eventBox__container'>
      <div className='eventBox'>
        <p className='eventBox__date'>{date}</p>
        <h3 className='eventBox__title'>{title}</h3>
        <p>{description}</p>
      </div>
      <div className='timeline__item__content'>
            <span className='circle'></span>
        </div>
  </div>
  )
}

export default EventBox;
