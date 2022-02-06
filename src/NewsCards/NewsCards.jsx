import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCards.scss'
const NewsCards = () => {
const newsArticles = useSelector( state => state.newsReducers.news)
const [numberOfArticles, setNumberOfArticles] = useState(3);
const [showLoading, setShowLoading] = useState(false)
const loadMore = () => {
    setShowLoading(true)
    setTimeout( () => {
        setShowLoading(false)
        if(numberOfArticles <= newsArticles.length){
            if(newsArticles.length-numberOfArticles >=3){
                setNumberOfArticles(numberOfArticles + 3);
            }
            else{
                setNumberOfArticles(numberOfArticles + newsArticles.length-numberOfArticles)
            }
        }
    }, 2000)
    
}

  return(
  <section className='newsCards'>
      {
          newsArticles.slice(0,numberOfArticles).map( (news) => {
              return <NewsCard news={news} key={news.id}/>
          })
      }
      {showLoading ? "" :<button className={ numberOfArticles === newsArticles.length ? "noMoreArticles" : "loadMore"} onClick={ () => loadMore()}>Load more</button>}
      {showLoading ? <div className='loadingDivs'><div className='loading'></div><div className='loading'></div><div className='loading'></div></div>: ""}
      
  </section>);
};

export default NewsCards;
