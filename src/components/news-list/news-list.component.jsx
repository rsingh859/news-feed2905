import React, { useContext } from 'react';
import './news-list.styles.scss';

import { NewsContext } from '../../context/news/news.context.provider';

import NewsCard from '../news-card/news-card.component';
import Spinner from '../spinner/spinner.component';

const NewsList = (props) => {
    const { news } = useContext(NewsContext);
    console.log(news);
    return(
        <div className='card-list'>
            {news ? news.articles.map(({ url , ...otherProps }) => (
                <NewsCard key={url} {...otherProps} />
            )) : (<Spinner />) }
        </div>
    );
}

export default NewsList;