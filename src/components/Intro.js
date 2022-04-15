// import calendarImg from '../assets/calendar2.png';

const Intro = () => {
    const videoLink = 'https://www.powtoon.com/embed/eejkonrd63A/';

    return (
        <div className='introContainer'>
            <div className='introBgContainer'></div>
            <div className='introTextContainer'>
                <h1>Work <span>smarter</span>{"\n"}not harder{"\n"}with the Unity{"\n"}time management{"\n"}tool</h1>
            </div>
            <div className='introPicContainer'>
                {/* <img src={calendarImg} alt='calendar'></img> */}
                <iframe allow='autoplay' loading='eager' src={videoLink} title='video'></iframe>
            </div>
        </div>
    );
};

export default Intro;