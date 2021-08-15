import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';
import styles from "./Booklist.module.css";

const Booklist = () => {

    const data = useContext(ThemeContext);

    const theme = data.isLightTheme ? data.light : data.dark;

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
