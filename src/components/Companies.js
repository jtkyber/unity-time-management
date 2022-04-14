import React, { useRef, useEffect } from 'react';
import d2lPic from '../assets/d2l.png';
import blackboard from '../assets/blackboard.png';
import canvasLMS from '../assets/canvasLMS.png';
import cornerstone from '../assets/cornerstone.png';
import moodle from '../assets/moodle.png';

const Companies = () => {
    const marqueeContainerRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            marqueeContainerRef.current.children[0].classList.add('marqueeAnimation');
            marqueeContainerRef.current.children[1].classList.add('marqueeAnimation');
        }, 500)
    }, [marqueeContainerRef])

    return (
        <div className='companiesContainer'>
            <h1>Trusted by students{'\n'}Nationwide</h1>
            <div ref={marqueeContainerRef} className='marqueeContainer'>
                <div className='marquee'>
                    <img src={d2lPic} alt='D2L'></img>
                    <img src={blackboard} alt='D2L'></img>
                    <img src={canvasLMS} alt='D2L'></img>
                    <img src={cornerstone} alt='D2L'></img>
                    <img src={moodle} alt='D2L'></img>
                </div>
                <div className='marquee'>
                    <img src={d2lPic} alt='D2L'></img>
                    <img src={blackboard} alt='D2L'></img>
                    <img src={canvasLMS} alt='D2L'></img>
                    <img src={cornerstone} alt='D2L'></img>
                    <img src={moodle} alt='D2L'></img>
                </div>
            </div>
        </div>
    );
};

export default Companies;