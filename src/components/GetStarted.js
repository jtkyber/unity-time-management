import React, { useEffect, useRef, useState } from 'react';

const GetStarted = () => {
    const signUpAlertTextRef = useRef(null);
    const [numberOfAccounts, setNumberOfAccounts] = useState(0);

    useEffect(() => {
        grabEmailCountInDB();
    }, [])

    const grabEmailCountInDB = async () => {
        const req = await fetch('https://calm-ridge-60009.herokuapp.com/getEmailCount');
        const emailCount = await req.json();
        setNumberOfAccounts(emailCount);
    }

    const submitEmail = async (e) => {
        e.preventDefault();
        const email = e.target.querySelector('.emailInputSection > input').value;
        if (!email) return;
        
        const req = await fetch('https://calm-ridge-60009.herokuapp.com/postEmail', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email
            })
        })
        const emailIsAvailable = await req.json();

        if (emailIsAvailable !== true) {
            signUpAlertTextRef.current.innerText = emailIsAvailable;
        } else {
            grabEmailCountInDB();
            signUpAlertTextRef.current.innerText = '';
        }

        e.target.querySelector('.emailInputSection > input').value = '';
    }

    return (
        <div className='getStartedContainer'>
            <form onSubmit={submitEmail} className='getStartedForm'>
                <h1 className='exitBtn'>x</h1>
                <h1 className='signUpText'>Enter your email to start using Unity</h1>
                <h3 className='numberSignedUp'><span>{numberOfAccounts}</span> {numberOfAccounts === 1 ? 'person has' : 'people have'} signed up!</h3>
                <div className='emailInputSection'>
                    <input placeholder='Enter your email' type='email' id='email'></input>
                    <button className='signUpBtn'><h3>Sign up</h3></button>
                </div>
                <h4 className='freeSignUpText'>Create your free account. No credit card required</h4>
                <div ref={signUpAlertTextRef} className='signUpAlertText'></div>
            </form>
        </div>
    );
};

export default GetStarted;