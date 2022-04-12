import React from 'react';

const Nav = () => {
    return (
        <nav className='navBar'>
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