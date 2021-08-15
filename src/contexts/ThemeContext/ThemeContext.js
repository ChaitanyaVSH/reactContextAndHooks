import React, { createContext } from 'react';

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

    const theme = {
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

    return (
        <ThemeContext.Provider value={{...theme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
