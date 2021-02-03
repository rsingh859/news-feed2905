import React, { useEffect, useState } from 'react';
import './news-list.styles.scss';

import axios from 'axios';

import NewsCard from '../news-card/news-card.component';
import Spinner from '../spinner/spinner.component';

const NewsList = ({url}) => {

    const [news, setNews ] = useState(null);
    const API_KEY = '7e3bcec9fc6240c09259254552a7affb';

    useEffect(() => {
        axios.get(
            `${url}${API_KEY}`
        )
        .then(res => setNews(res.data))
        .catch((err) => console.log(err));
    },[url]);
    

    return(
        <div className='card-list'>
            {news ? 
                news.articles.map(({ url , ...otherProps }) => (
                <NewsCard key={url} {...otherProps} />
                )
            )
            : 
            (
                <Spinner />
            )}
        </div>
    );
}

export default NewsList;