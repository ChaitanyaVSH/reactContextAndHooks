import React from 'react';
import styles from "./App.module.css";
import Booklist from './components/BookList/Booklist';
import Navbar from './components/NavBar/Navbar';
import ThemeToggler from './components/ThemeToggler';
import ThemeProvider from "./contexts/ThemeContext/ThemeContext";

const App = () => {
  return (
    <div className={styles.container}>
      <ThemeProvider>
        <Navbar/>
        <Booklist/>
        <ThemeToggler/>
      </ThemeProvider>
    </div>
  )
}

export default App
