// import calendarImg from '../assets/calendar2.png';

import { useEffect, useRef } from "react";

const Intro = () => {
    const videoLink = 'https://www.powtoon.com/embed/eejkonrd63A/';
    const spanRef = useRef(null);

    useEffect(() => {
        const checkDocumentReadyInterval = setInterval(() => {
            if (document.readyState === 'complete') {
                spanRef.current.classList.add('wordPop');
                clearInterval(checkDocumentReadyInterval);
            }
        }, 10);
    }, [])

    return (
        <div className='introContainer'>
            <div className='introBgContainer'></div>
            <div className='introTextContainer'>
                <h1>Work <span ref={spanRef}>smarter</span>{"\n"}not harder{"\n"}with the Unity{"\n"}time management{"\n"}tool</h1>
            </div>
            <div className='introPicContainer'>
                {/* <img src={calendarImg} alt='calendar'></img> */}
                <iframe allow='autoplay' loading='eager' src={videoLink} title='video'></iframe>
            </div>
        </div>
    );
};

export default Intro;