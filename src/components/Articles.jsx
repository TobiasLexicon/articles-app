import axios from 'axios';
import { useEffect, useState } from 'react';

export const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7247/api/Article').then(response => {
      console.log(response.data);
      setArticles(response.data);
    });
  }, []);
  return (
    <div>
      <h1>Articles</h1>
      {articles.map(article => (
        <div className='articlesList'>
          <p>{article.articleId}</p>
          <p>{article.name}</p>
          <p>{article.price}</p>
          <p>{article.stock}</p>
        </div>
      ))}
    </div>
  );
};
