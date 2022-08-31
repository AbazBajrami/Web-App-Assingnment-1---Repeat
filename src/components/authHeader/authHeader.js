//imports
import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

//exports
const AuthHeader = (props) => {
    const context = useContext(AuthContext);
    const { history } = props;
    return context.isAuthenticated ? (
        <p>
            User: {context.userName}! <button onClick={() => context.signout()}>Sign Out</button>
        </p>
        ) : (
        <p>
            You must login{" "}
            <button onClick={() => history.push("/login")}>Login</button>
        </p>
    );
};

export default withRouter(AuthHeader);