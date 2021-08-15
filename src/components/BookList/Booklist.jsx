import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';
import styles from "./Booklist.module.css";

const Booklist = () => {

    const themeData = useContext(ThemeContext);

    const theme = themeData.isLightTheme ? themeData.light : themeData.dark;

    return (
        <div className={styles.container} style={{
            background: theme.bg,
            color: theme.text,
        }}>
            <div className={styles.booklist}>
                <ul>
                    <li>Secret of king</li>
                    <li>Attitude is everything</li>
                    <li>Final empire</li>
                </ul>
            </div>
        </div>
    )
}

export default Booklist;
