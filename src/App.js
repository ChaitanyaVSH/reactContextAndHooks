import React from 'react';
import styles from "./App.module.css";
import Booklist from './components/BookList/Booklist';
import Navbar from './components/NavBar/Navbar';
import ThemeToggler from './components/ThemeToggler';
import AuthProvider from './contexts/AuthenticationContext/AuthContext';
import ThemeProvider from "./contexts/ThemeContext/ThemeContext";

const App = () => {
  return (
    <div className={styles.container}>
      <AuthProvider>
      <ThemeProvider>
        <Navbar/>
        <Booklist/>
        <ThemeToggler/>
      </ThemeProvider>
      </AuthProvider>
    </div>
  )
}

export default App
