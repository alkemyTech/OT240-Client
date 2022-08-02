import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './styles/News.component.scss';

import api from '../../axios/main';

import Slider from '../../components/Slider/Slider';

const sliderContents = [
  { imageUrl: '/images/blog-img-01.jpg', text: 'Awesome slide description' },
  { imageUrl: '/images/blog-img-02.jpg', text: 'Awesome slide description' },
  { imageUrl: '/images/blog-img-03.jpg', text: 'Awesome slide description' },
];

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
      <h1>Novedades</h1>
      {news.length && (
        <Slider slides={news} />
        // <ul>
        //   {news.map(({ name, image, id }) => (
        //     <li key={id} onClick={() => navigate(`${id}`)}>
        //       <h1>{name}</h1>
        //       <div>
        //         <img src={image} alt='' />
        //       </div>
        //     </li>
        //   ))}
        // </ul>
      )}
    </>
  );
};

export default NewsList;
