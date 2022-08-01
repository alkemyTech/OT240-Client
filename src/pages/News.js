import React from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../axios/main';

const NewsList = () => {
  const navigate = useNavigate();

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
    <>
      {news.length && (
        <ul>
          {news.map(({ name, image, id }) => (
            <li key={id} onClick={() => navigate(`${id}`)}>
              <h1>{name}</h1>
              <div>
                <img src={image} alt='' />
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default NewsList;
