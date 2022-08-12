import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import css from './styles/NewsSlider.css';
import fetchApi from '../../axios/axios';

const NewsSlider = ({ limit }) => {
  const [loading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    let isMounted = true;

    const getNews = async () => {
      try {
        const { data } = await fetchApi({ method: 'get', url: '/news' });
        isMounted && setNews(data);
      } catch (err) {
        isMounted && setError(err.message);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    getNews();

    return () => (isMounted = false);
  }, []);

  return (
    <article id='slider'>
      {!loading && news.length ? (
        <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} transitionTime={500}>
          {news.slice(0, limit).map(({ image, name }, i) => (
            <figure key={i}>
              <div
                className='image'
                style={{ backgroundImage: `url('${image}')` }}
                alt={`Slide ${i}`}
              />
              <figcaption className='legend'>{name}</figcaption>
            </figure>
          ))}
        </Carousel>
      ) : (
        ''
      )}
    </article>
  );
};

export default NewsSlider;
