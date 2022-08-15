import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import css from './styles/NewsSlider.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../../redux/actions/news.actions';

const NewsSlider = ({ limit }) => {
  const dispatch = useDispatch();
  const { entries, error, loading } = useSelector((state) => state.news);

  React.useEffect(() => {
    dispatch(fetchNews({ url: '/news' }));
  }, [dispatch]);

  return (
    <article id='slider'>
      {loading && <p className='loading'>Cargando Sildes...</p>}
      {!loading && error && <p className='error'>{error}</p>}
      {!loading && !error && entries.length && (
        <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} transitionTime={500}>
          {entries.slice(0, limit).map(({ image, name }, i) => (
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
      )}
    </article>
  );
};

export default NewsSlider;
