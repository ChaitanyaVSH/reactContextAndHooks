import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext/ThemeContext';

const ThemeToggler = () => {

    const theme = useContext(ThemeContext);

    const clickHandler = () => {
        theme.toggleTheme()
    }

    return (
        <div>
            <button onClick={clickHandler}>Toggle</button>
        </div>
    )
}

export default ThemeToggler;
