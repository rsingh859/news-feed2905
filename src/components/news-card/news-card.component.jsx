import React from 'react';
import './news-card.styles.css';
import { ImageContainer } from './news-card.styles';

const NewsCard = ({ urlToImage, author, title, description }) => {
    return(
            <div className='card'>
                <ImageContainer urlToImage={urlToImage} />
                <div className='card-body'>
                    <div className='card-title'>{title}</div>
                    <div className='card-description'>{description}</div>
                </div>
                <div className='card-footer'>The Footer</div>
            </div>
    )
}

export default NewsCard;