import React from 'react';
import '../Styling/Founder.css';
import { Subheader__text, Hero__title } from '../Components/StyledText';

function Founder() {
    return (
        <div className='founder'>
            <Hero__title>MEET THE FOUNDER</Hero__title>
            
            <div className='founder__images'>
                <img className='founder__img'
                src='./ImageAssets/founder__info.png'
                alt='' />
                
                <img className='founder__img'
                src='./ImageAssets/founder__img.jpg'
                alt='' />
            </div>

            <div className='founder__bio'>
                <p>
                Perla Pena, leader, and founder of Avivamiento Juvenil was born on December 19,1992. At an early age she felt the calling of God,
                and a desire for others to know her Abba Father through the belief of his powerful word. Perla became a youth leader at age sixteen
                mentoring and encouraging the spiritual growth of the youth ministry until the age of twenty-three. Perla's leadership skills have 
                allowed her to serve in various capacities in the financial industry and evidently serving as a branch manager. 
                </p>
                <br/>
                <p>
                Avivamiento Juvenil was born in 2019, after God placed a desire in Perla's heart for empowering youth to encounter the fullness of
                God and experience a relationship with Christ as the ones she embraced as a teenager. These experiences impacted Perla's life and 
                contributed to who she is today. She is thankful for her youth leaders, Pastors, family, and anyone who has encouraged and been a 
                part of her adolescent years. Perla desires young people to turn to God for help, "because God is the meaning of life". 
                </p>
            </div>

        </div>
    )
}

export default Founder
