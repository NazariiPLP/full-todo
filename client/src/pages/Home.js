import React, { useState } from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const Home = () => {
    const [state, useState] = useState(true); // true -> SignUp; false -> SignIn

    const buttonHandler = () => {
        setState(state => !state);
    }

    return (
        <>
        <header>
            <button oncClick={buttonHandler}>{state ? "SignIn" : "SignUp"}</button>
        </header>

        <main>
            { state ? <SignUp /> : <SignIn /> }
        </main>
        </>
    );
}

export default Home;
