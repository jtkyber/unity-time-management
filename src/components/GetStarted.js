import React from 'react';

const GetStarted = () => {
    return (
        <div className='getStartedContainer'>
            <form className='getStartedForm'>
                <h1>Sign up now to...</h1>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' id='firstName'></input>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName'></input>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email'></input>
            </form>
        </div>
    );
};

export default GetStarted;