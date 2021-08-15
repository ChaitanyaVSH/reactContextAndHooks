import React from 'react';
import styles from "./Booklist.module.css";

const Booklist = () => {
    return (
        <div className={styles.container}>
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
