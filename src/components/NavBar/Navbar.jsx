import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthenticationContext/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';
import styles from "./NavBar.module.css";

const Navbar = () => {

    const themeData = useContext(ThemeContext);
    const authData = useContext(AuthContext);

    const theme = themeData.isLightTheme ? themeData.light : themeData.dark;

    return (
        <div className={styles.container} style={{
            background: theme.bg,
            color: theme.text,
        }}>
            <h2>Context and Hooks</h2>
            {authData.isAuthenticated ? <h3>Logged In</h3> : <h3>Logged Out</h3>}
            <nav className={styles.navbar}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
