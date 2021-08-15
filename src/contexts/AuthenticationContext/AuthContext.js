import React, { createContext, useState } from 'react';

/**
 * Creating a context
 * 1. Context has the Provider.
 * 2. Provider should wrap the components that needs access to the Context.
 * 3. Provider takes a parameter called value that holds the data.
 */
export const AuthContext = createContext();

/**
 * Creating a wrapper that wraps the nested elements with the Context.Provider
 * @param {1} param1 Children, Wrapped components come as children to this wrapper.
 * @returns Children wrapped with the Context.Provider.
 */
const AuthProvider = ({children}) => {

    // Creating a default authentication
    const authData = {
        isAuthenticated: false
    }

    // Creating a default state
    const [auth, setAuth] = useState(authData)

    // Handler to update the auth state
    function toggleAuthStatus() {
        setAuth({
            ...auth,
            isAuthenticated: !auth.isAuthenticated
        })
    }

    return (
        <AuthContext.Provider value={{...auth, toggleAuthStatus}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
