//imports
import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';

//exports
const LoginPage = props => {
    const [userName, setUserName] = useState("");
    const context = useContext(AuthContext)
    const login = () =>
    {context.authenticate(userName);};
    const {from} = props.location.state || {from: { pathname: "/" }};

    if (context.isAuthenticated === true)
    {
        return <Redirect to={from} />;
    }
    return (
        <>
            <h2>Login page</h2>
            <p>You must login to your account</p>
            <input id="userName" placeholder="user name" onChange={e => {setUserName(e.target.value);}}></input><br />
            <button onClick={login}>Log In</button>
            <p>Or Sign Up <Link to="/signup">Sign Up</Link></p>
        </>
    );
};
export default LoginPage;