import React, { useEffect, useState, useRef } from 'react';

const Nav = () => {
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
    }, [introTop])

    const changeNavStyle = () => {
        const newIntroTop = introContainerRef.current.getBoundingClientRect().top;
        const isScrolled = (newIntroTop < introTop) && newIntroTop <= 0;

        if (Math.abs(newIntroTop - introTop) > 20) {
            navRef.current.classList.toggle('scrolled', isScrolled);
            setIntroTop(newIntroTop);
        }

        // navRef.current.classList.toggle('scrolled', isScrolled);
        

        // const isScrolled = introContainerRef.current.getBoundingClientRect().top < navRef.current.getBoundingClientRect().height - 5;
        // navRef.current.classList.toggle('scrolled', isScrolled);
    }

    return (
        <nav ref={navRef} className='navBar'>
            <div className='navLeft'>
                <h1 className='title'>Unity</h1>
            </div>
            <div className='navRight'>
                <button className='getStartedBtn'><h3>Get Started</h3></button>
            </div>
        </nav>
    );
};

export default Nav;