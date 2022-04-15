import React from 'react';

const GetStarted = () => {
    const submitEmail = (e) => {
        e.preventDefault();
        e.target.querySelector('.emailInputSection > input').value = '';
    }

    return (
        <div className='getStartedContainer'>
            <form onSubmit={submitEmail} className='getStartedForm'>
                <h1 className='exitBtn'>x</h1>
                <h1 className='signUpText'>Enter your email to start using Unity</h1>
                <label htmlFor='email'>Email</label>
                <div className='emailInputSection'>
                    <input placeholder='Enter your email' type='text' id='email'></input>
                    <button className='signUpBtn'><h3>Sign up</h3></button>
                </div>
            </form>
        </div>
    );
};

export default GetStarted;