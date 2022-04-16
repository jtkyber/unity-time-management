import { useEffect } from "react";

const Intro = () => {
    const videoLink = 'https://www.powtoon.com/embed/eejkonrd63A/';
    // const spanRef = useRef(null);

    useEffect(() => {
        const allSpans = document.querySelectorAll('.introTextContainer span');
        const checkDocumentReadyInterval = setInterval(() => {
            if (document.readyState === 'complete') {
                // spanRef.current.classList.add('wordPop');
                let count = 0;
                [...allSpans].forEach(span => {
                    setTimeout(() => {
                        span.classList.add('wordPop');
                    }, count);
                    count += 150;
                })
                clearInterval(checkDocumentReadyInterval);
            }
        }, 10);
    }, [])
    
    return (
        <div className='introContainer'>
            <div className='introBgContainer'></div>
            <div className='introTextContainer'>
                <h1>Work <span>s</span><span>m</span><span>a</span><span>r</span><span>t</span><span>e</span><span>r</span>
                    {"\n"}not harder{"\n"}with the Unity{"\n"}time management{"\n"}tool
                </h1>
            </div>
            <div className='introPicContainer'>
                <iframe allow='autoplay' loading='eager' src={videoLink} title='video'></iframe>
            </div>
        </div>
    );
};

export default Intro;