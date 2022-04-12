import React from 'react';
import calendarImg from '../assets/calendar2.png';

const Intro = () => {
    return (
        <div className='introContainer'>
            <div className='introBgContainer'></div>
            <div className='introTextContainer'>
                <h1>Work smarter{"\n"}Not harder{"\n"}With the Unity{"\n"}Time management{"\n"}Tool</h1>
            </div>
            <div className='introPicContainer'>
                <img src={calendarImg} alt='calendar'></img>
            </div>
        </div>
    );
};

export default Intro;