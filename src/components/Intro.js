import { useEffect, useRef } from 'react';
import calendarImg from '../assets/calendar2.png';

const Intro = () => {
    const iFrameRef = useRef(null);
    const videoLink = 'https://www.powtoon.com/embed/eejkonrd63A/';

    useEffect(() => {
        console.log(iFrameRef.current)
        iFrameRef.current.click();
    }, [])
    
    return (
        <div className='introContainer'>
            <div className='introBgContainer'></div>
            <div className='introTextContainer'>
                <h1>Work <span>smarter</span>{"\n"}not harder{"\n"}with the Unity{"\n"}time management{"\n"}tool</h1>
            </div>
            <div className='introPicContainer'>
                {/* <img src={calendarImg} alt='calendar'></img> */}
                <iframe ref={iFrameRef} allow='autoplay' loading='eager' src={videoLink} title='video'></iframe>
            </div>
        </div>
    );
};

export default Intro;