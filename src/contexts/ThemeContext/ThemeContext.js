import React, { useState, createContext } from 'react';

/**
 * Creating a context
 * 1. Context has the Provider.
 * 2. Provider should wrap the components that needs access to the Context.
 * 3. Provider takes a parameter called value that holds the data.
 */
export const ThemeContext = createContext();


/**
 * Creating a wrapper that wraps the nested elements with the Context.Provider
 * @param {1} param1 Children, Wrapped components come as children to this wrapper.
 * @returns Children wrapped with the Context.Provider.
 */
const ThemeProvider = ({children}) => {

    // Creating a default theme
    const themeData = {
        isLightTheme: true,
        light: {
            bg: "white",
            text: "black",
        },
        dark: {
            bg: "black",
            text: "white",
        }
    }

    // Creating a default state
    const [theme, setTheme] = useState(themeData)

    // Handler to update the data
    const toggleTheme = () => {
        setTheme({
            ...theme,
            isLightTheme: !theme.isLightTheme,
        })
    }

    return (
        <ThemeContext.Provider value={{...theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
