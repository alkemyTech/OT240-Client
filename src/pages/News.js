import React from 'react';

import api from '../axios/main';

const News = () => {
  const [news, setNews] = React.useState([]);
  const [error, setError] = React.useState([]);

  React.useEffect(() => {
    let isMounted = true;

    const fetchNews = async () => {
      try {
        const { data } = await api.get('/news');
        isMounted && setNews(data);
      } catch (err) {
        isMounted && setError(err.message);
      }
    };

    fetchNews();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main>
      <h1>News</h1>
      {news.length && (
        <ul>
          {news.map(({ name, image }) => (
            <li key={name}>
              <h1>{name}</h1>
              <div>
                <img src={image} alt='' />
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default News;
