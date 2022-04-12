import React, { useRef } from 'react';
import d2lPic from '../assets/d2l.png';

const Companies = () => {
    const marqueeContainerRef = useRef(null);

    return (
        <div className='companiesContainer'>
            <h1>Trusted by students{'\n'}Nationwide</h1>
            <div ref={marqueeContainerRef} className='marqueeContainer'>
                <div className='marquee'>
                    <img src={d2lPic} alt='D2L'></img>
                    <img src={d2lPic} alt='D2L'></img>
                    <img src={d2lPic} alt='D2L'></img>
                    <img src={d2lPic} alt='D2L'></img>
                    <img src={d2lPic} alt='D2L'></img>
                </div>
                <div className='marquee'>
                    <img src={d2lPic} alt='D2L'></img>
                    <img src={d2lPic} alt='D2L'></img>
                    <img src={d2lPic} alt='D2L'></img>
                    <img src={d2lPic} alt='D2L'></img>
                    <img src={d2lPic} alt='D2L'></img>
                </div>
            </div>
        </div>
    );
};

export default Companies;