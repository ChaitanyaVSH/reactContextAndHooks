import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthenticationContext/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext/ThemeContext';

const ThemeToggler = () => {

    const theme = useContext(ThemeContext);
    const auth = useContext(AuthContext);

    const themeHandler = () => {
        theme.toggleTheme();
    }

    const authHandler = () => {
        auth.toggleAuthStatus();
    }

    return (
        <div>
            <button onClick={themeHandler}>Toggle Theme</button> {" "}
            <button onClick={authHandler}>{auth.isAuthenticated ? "Logout" : "Login"}</button>
        </div>
    )
}

export default ThemeToggler;
