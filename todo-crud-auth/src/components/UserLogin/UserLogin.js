import React from 'react';
import { Button } from 'react-bootstrap';

const handleSignIn = () =>{
    console.log("handle sign In")
}

const UserLogin = () => {
    return (
        <div >
            <h2>Login Here</h2>

        <Button onClick={handleSignIn} variant='success'>Sign IN with google</Button>
        </div>
    );
};

export default UserLogin;