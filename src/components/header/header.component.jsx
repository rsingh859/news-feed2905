import React from 'react';

import NewsList from '../news-list/news-list.component';

import './header.styles.scss';

import { useNewsContext } from '../../context/news/news.context.provider';

import { setUrl } from '../../context/news/news.action.creators';


const Header = () => {
    const [{ url }, dispatch] = useNewsContext();
    const URL_TESLA = 'http://newsapi.org/v2/everything?q=tesla&from=2021-01-08&sortBy=publishedAt&apiKey=';
    const URL_BUSINESS = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=';
    const URL_APPLE = 'http://newsapi.org/v2/everything?q=apple&from=2021-02-07&to=2021-02-07&sortBy=popularity&apiKey=';
    const URL_TECH = 'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=';
    const URL_WSJ = 'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=';
    return (    
    <div>
        <div className='header-container'>
            <div className='option' onClick = {() => dispatch(setUrl(URL_TESLA))} >TESLA</div>
            <div className='option' onClick = {() => dispatch(setUrl(URL_BUSINESS))}>BUSINESS</div>
            <div className='option' onClick = {() => dispatch(setUrl(URL_APPLE))}>APPLE</div>
            <div className='option' onClick = {() => dispatch(setUrl(URL_TECH))}>TECHCRUNCH</div>
            <div className='option' onClick = {() => dispatch(setUrl(URL_WSJ))}>WALLSTREET JOURNALS</div>
        </div>
        <NewsList url={url} />
    </div>
)};

export default React.memo(Header);