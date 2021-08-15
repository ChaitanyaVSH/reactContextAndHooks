import React, { createContext, useState } from 'react';

/**
 * Creating a context
 * 1. Context has the Provider.
 * 2. Provider should wrap the components that needs access to the Context.
 * 3. Provider takes a parameter called value that holds the data.
 */
export const BookContext = createContext();

/**
 * Creating a wrapper that wraps the nested elements with the Context.Provider
 * @param {1} param1 Children, Wrapped components come as children to this wrapper.
 * @returns Children wrapped with the Context.Provider.
 */
const BookContextProvider = ({children}) => {

    // Creating a default list of books
    const booksList = [ {
        id: 1,
        title: "The rise of SDEs to Senior SDEs"
    },
    {
        id: 2,
        title: "The book that changed my life"
    },
    {
        id: 3,
        title: "The book that changed his life"
    },
    {
        id: 4,
        title: "The book that changed her life"
    },
    {
        id: 5,
        title: "The book that changed their life"
    },
    ];

    // Creating a default state
    const [books, setBooks] = useState(booksList)

    return (
        <BookContext.Provider value={{...books}}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
