//imports
import React, { useState, createContext } from "react";

//exports
export const AuthContext=createContext(null);
export const userNameList=["userName"];

const AuthContextProvider = (props) => {
    const [userName, setUserName] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const authenticate = (userName) =>
    {
        if(userNameList.includes(userName))
        {
            setUserName(userName);
            setIsAuthenticated(true);
        }
    };

    const register = async (userName) =>
    {
        userNameList.push(userName)
    };

    const signout = () =>
    {
        setTimeout(() => setIsAuthenticated(false), 500);
    }

    return (
        <AuthContext.Provider
        value={{
            userName,
            register,
            authenticate,
            isAuthenticated,
            signout,
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;