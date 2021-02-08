import React from 'react';

import NewsList from '../news-list/news-list.component';

import './header.styles.scss';

import { useNewsContext } from '../../context/news/news.context.provider';

import { setUrl } from '../../context/news/news.action.creators';

const handleOnClick = ({link, dispatch}) => {

    const options = document.querySelectorAll('.option');

    options.forEach((option) => {
        option.addEventListener('click', () => {
            console.log("Calling the remove active class")
            removeActiveClasses();
            option.classList.add('active')
            console.log(option.classList);
        })
    })

    const removeActiveClasses = () => {
        console.log("In remove active classes")
        options.forEach(option => {
            option.classList.remove('active')
        })
    }

    dispatch(setUrl(link));
}

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
            <div className='option' onClick = {() => handleOnClick({link: URL_TESLA, dispatch})} >TESLA</div>
            <div className='option' onClick = {() => handleOnClick({link: URL_BUSINESS, dispatch})}>BUSINESS</div>
            <div className='option' onClick = {() => handleOnClick({link: URL_APPLE, dispatch})}>APPLE</div>
            <div className='option' onClick = {() => handleOnClick({link: URL_TECH, dispatch})}>TECHCRUNCH</div>
            <div className='option active' onClick = {() => handleOnClick({link: URL_WSJ, dispatch})}>WALLSTREET JOURNALS</div>
        </div>
        <NewsList url={url} />
    </div>
)};

export default React.memo(Header);