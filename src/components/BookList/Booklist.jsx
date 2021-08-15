import React, { useContext } from 'react';
import { BookContext } from '../../contexts/BooksContext/BookContext';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';
import styles from "./Booklist.module.css";

const Booklist = () => {

    const themeData = useContext(ThemeContext);
    const booksList = useContext(BookContext);

    const theme = themeData.isLightTheme ? themeData.light : themeData.dark;

    const renderBooks = () => {
        return (
            <ul>
                {
                    booksList.books.map((book, idx) => {
                        return <li key={idx}>{book.title}</li>
                    })
                }
            </ul>
        )
    }

    return (
        <div className={styles.container} style={{
            background: theme.bg,
            color: theme.text,
        }}>
            <div className={styles.booklist}>
                {renderBooks()}
            </div>
        </div>
    )
}

export default Booklist;
