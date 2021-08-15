import React from 'react';
import styles from "./NavBar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
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
