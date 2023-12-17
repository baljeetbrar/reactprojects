import React from 'react';
import {format} from 'date-fns';
const NewsData = ({article}) => {
    const publishedAt = new Date(article.publishedAt);

    const formattedPublishedAt = format(publishedAt, "MMMM dd, yyyy 'at' h:mm a");

  return (
    <div className="news-article">
        <div className="article-details d-flex flex-column">
            <img src={article.urlToImage} alt={article.title} className="article-image" />
            <h3 className="article-title">{article.title}</h3> 
            <p className="article-description">{article.description}</p> 
            <p className='article-publishedtime'>Published at: {formattedPublishedAt} </p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More
            </a>
    </div>
  </div>
  );
};

export default NewsData;
