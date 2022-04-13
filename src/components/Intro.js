import calendarImg from '../assets/calendar2.png';

const Intro = () => {
    return (
        <div className='introContainer'>
            <div className='introBgContainer'></div>
            <div className='introTextContainer'>
                <h1>Work <span>smarter</span>{"\n"}not harder{"\n"}with the Unity{"\n"}<span>time</span> management{"\n"}tool</h1>
            </div>
            <div className='introPicContainer'>
                <img src={calendarImg} alt='calendar'></img>
            </div>
        </div>
    );
};

export default Intro;