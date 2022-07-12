import React from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';


const UserLogin = () => {
    const {signInByGoogle,user} = useFirebase()
    return (
        <div >
            <h2>Login Here: {user.displayName}</h2>

        <Button onClick={signInByGoogle} variant='success'>Sign IN with google</Button>
        </div>
    );
};

export default UserLogin;