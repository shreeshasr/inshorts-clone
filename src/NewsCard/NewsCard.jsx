import React from 'react';
import './NewsCard.scss'
const NewsCard = ({news}) => {

  return(
    <div className='newsCard'>
        <div className="cardLeft">
            <img src={news.image} alt="news"/>
        </div>
        
        <div className="cardRight">
            <div className='newsTitle'>{news.title}</div>
            <span className='authorAndTime'><strong>short</strong> by {news.author} / {news.postedDate}</span>
            <div className='newsText'>{news.text}</div>
            {news.postedWebsite !== "" ? <span className='readMore'>read more at <strong>{news.postedWebsite}</strong></span> : ""}
        </div>
    </div>
  );
};

export default NewsCard;
