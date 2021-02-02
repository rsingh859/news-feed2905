import React, { useState, useEffect, createContext } from 'react';

import axios from 'axios';

export const NewsContext = createContext();
export const HeaderContext = createContext();

export const NewsContextProvider = (props) => {
    const [news, setNews ] = useState(null);
    const [url, setUrl] = useState('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=');
    const API_KEY = '7e3bcec9fc6240c09259254552a7affb';

    useEffect(() => {
        axios.get(
            `${url}${API_KEY}`
        )
        .then(res => setNews(res.data))
        .catch((err) => console.log(err));
    },[]);

    return (
        <NewsContext.Provider value = {{ news }}>
            {props.children}
        </NewsContext.Provider>
    );
}