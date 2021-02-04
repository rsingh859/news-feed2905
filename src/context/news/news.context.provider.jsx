import React, { createContext, useContext, useReducer } from 'react';

export const NewsContext = createContext();

export const NewsContextProvider = ({ initialState, reducer, children }) => (
    <NewsContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </NewsContext.Provider>
);

export const useNewsContext = () => useContext(NewsContext);