import React, { useEffect, useState, useRef } from 'react';
import UnityLogo from './UnityLogo';
import unityLogo from '../assets/unityLogo.svg';

const Nav = () => {
    const navRef = useRef(null);
    const appContainerRef = useRef(null);
    const introContainerRef = useRef(null);
    const getStartedContainer = useRef(null);

    const [introTop, setIntroTop] = useState(0);

    useEffect(() => {
        appContainerRef.current = document.querySelector('.appContainer');
        introContainerRef.current = document.querySelector('.introContainer');
        getStartedContainer.current = document.querySelector('.getStartedContainer');


        appContainerRef.current.addEventListener('scroll', changeNavStyle);
        getStartedContainer.current.addEventListener('click', hideGetStartedModal);

        return () => {
            appContainerRef.current.removeEventListener('scroll', changeNavStyle);
            getStartedContainer.current.removeEventListener('click', hideGetStartedModal);
    }
    }, [introTop])

    const hideGetStartedModal = (e) => {
        if (e.target.classList.contains('getStartedContainer') || e.target.classList.contains('exitBtn')) {
            getStartedContainer.current.style.setProperty('display', 'none');
        }
    }

    const changeNavStyle = () => {
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
        getStartedContainer.current.style.setProperty('display', 'flex');
    }

    return (
        <nav ref={navRef} className='navBar'>
            <div className='navLeft'>
                {/* <img src={unityLogo} alt='Unity Logo'></img> */}
                <UnityLogo />
                <h1 className='title'>Unity</h1>
            </div>
            <div className='navRight'>
                <button onClick={handleGetStartedClick} className='getStartedBtn'><h3>Get Started</h3></button>
            </div>
        </nav>
    );
};

export default Nav;