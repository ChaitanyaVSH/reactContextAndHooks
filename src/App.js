import React from 'react';
import styles from "./App.module.css";
import Booklist from './components/BookList/Booklist';
import Navbar from './components/NavBar/Navbar';

const App = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Booklist/>
    </div>
  )
}

export default App
