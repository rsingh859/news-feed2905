import React, { useEffect, useState } from 'react';
import './news-list.styles.scss';

import axios from 'axios';
import dotenv from 'dotenv';

import NewsCard from '../news-card/news-card.component';
import Spinner from '../spinner/spinner.component';

dotenv.config();

const NewsList = ({url}) => {

    const [news, setNews ] = useState(null);
    const API_KEY = process.env.API_KEY;

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
                news.articles.map(({ description , ...otherProps }) => (
                <NewsCard key={description} {...otherProps} />
                )
            )
            : 
            (
                <Spinner />
            )}
        </div>
    );
}

export default React.memo(NewsList);