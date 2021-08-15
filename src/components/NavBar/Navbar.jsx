import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';
import styles from "./NavBar.module.css";

const Navbar = () => {

    const data = useContext(ThemeContext);

    const theme = data.isLightTheme ? data.light : data.dark;

    return (
        <div className={styles.container} style={{
            background: theme.bg,
            color: theme.text,
        }}>
            <h2>Context and Hooks</h2>
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
