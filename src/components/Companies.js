import React, { useRef } from 'react';

const Companies = () => {
    const marqueeContainerRef = useRef(null);

    return (
        <div className='companiesContainer'>
            <h2>Trusted by students{'\n'}Nationwide</h2>
            <div ref={marqueeContainerRef} className='marqueeContainer'>
                <div className='marquee'>
                    <h2>Company 1</h2>
                    <h2>Company 2</h2>
                    <h2>Company 3</h2>
                    <h2>Company 4</h2>
                    <h2>Company 5</h2>
                </div>
                <div className='marquee'>
                    <h2>Company 1</h2>
                    <h2>Company 2</h2>
                    <h2>Company 3</h2>
                    <h2>Company 4</h2>
                    <h2>Company 5</h2>
                </div>
            </div>
        </div>
    );
};

export default Companies;