import React from 'react';
import './news-card.styles.scss';
import { ImageContainer } from './news-card.styles';

const NewsCard = ({ urlToImage, author, title, content, publishedAt }) => {
    return(
            <div className='card'>
                <ImageContainer urlToImage={urlToImage} />
                <div className='card-body'>
                    <div className='card-title'>{title}</div>
                    <div className='card-description'>{content}</div>
                </div>
                <div className='card-footer'>
                    <div className='author-date'>
                        <span className='author'>{author}</span>
                        <span className='date'>{publishedAt}</span>
                    </div>
                    <div className='more'>
                        <span className='more'>more..</span>
                    </div>
                </div>
            </div>
    )
}

export default NewsCard;