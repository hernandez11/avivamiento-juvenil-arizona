import React from 'react';
import '../Styling/Album.css';
import {Assets, FAQ} from './Album__assets.js';

function Album() {
      
    return (
        <div>
            <h1 className='section__title'>Event Gallery</h1>

            { Assets.map ((img, index) => {
                return (
                    <>
                    <img className='album__img' src={img.image} alt='' />
                    </>
                );
            })}
        </div>
    )
}

export default Album
