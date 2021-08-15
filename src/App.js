import React from 'react';
import styles from "./App.module.css";
import Booklist from './components/BookList/Booklist';
import Navbar from './components/NavBar/Navbar';
import ThemeProvider from "./contexts/ThemeContext/ThemeContext";

const App = () => {
  return (
    <div className={styles.container}>
      <ThemeProvider>
        <Navbar/>
        <Booklist/>
      </ThemeProvider>
    </div>
  )
}

export default App
