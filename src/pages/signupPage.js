//imports
import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';

//exports
const SignUpPage = props => {
    const context = useContext(AuthContext)
    const [userName, setUserName] = useState("");
    const [registeredUser, setRegisteredUser] = useState(false);

    const registerUser = () =>
    {
        if (userName.length > 3) {
            context.register(userName);
            setRegisteredUser(true);
        }
    }
    const {from } = props.location.state || {from: { pathname: "/" } };

    if (registeredUser === true) {
        return <Redirect to="./login" />;
    }
    return (
        <>
            <h2>Sign Up Page</h2>
            <p>Register User</p>
            <input value={userName} placeholder="user name" onChange={e => {setUserName(e.target.value);}}></input><br />
            <button onClick={registerUser}>Register</button>
        </>
    );
};

export default SignUpPage;