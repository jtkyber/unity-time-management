import React, { useEffect, useState, useRef } from 'react';

const Nav = ({ route, setRoute }) => {
    const navRef = useRef(null);
    const appContainerRef = useRef(null);
    const introContainerRef = useRef(null);
    const [introTop, setIntroTop] = useState(0);

    useEffect(() => {
        appContainerRef.current = document.querySelector('.appContainer');
        introContainerRef.current = document.querySelector('.introContainer');

        appContainerRef.current.addEventListener('scroll', changeNavStyle);

        return () => {
            appContainerRef.current.removeEventListener('scroll', changeNavStyle);
        }
    }, [introTop, route])

    const changeNavStyle = () => {
        if (route !== 'index') return;

        const newIntroTop = introContainerRef.current.getBoundingClientRect().top;
        const isScrolled = (newIntroTop < introTop) && newIntroTop <= 0;
        const notAtTop = (newIntroTop < 0);

        navRef.current.classList.toggle('notAtTop', notAtTop);

        if (Math.abs(newIntroTop - introTop) > 20) {
            navRef.current.classList.toggle('scrolled', isScrolled);
            setIntroTop(newIntroTop);
        }
    }

    const handleGetStartedClick = (e) => {
        setRoute(route === 'index' ? 'getStarted' : 'index')
    }

    return (
        <nav ref={navRef} className='navBar'>
            <div className='navLeft'>
                <h1 className='title'>Unity</h1>
            </div>
            <div className='navRight'>
                <button 
                    onClick={handleGetStartedClick} 
                    className={'getStartedBtn'}>
                    <h3>{`${route === 'index' ? 'Get Started' : 'Back'}`}</h3>
                </button>
            </div>
        </nav>
    );
};

export default Nav;