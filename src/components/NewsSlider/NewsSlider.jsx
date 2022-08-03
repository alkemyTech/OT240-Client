import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import style from './styles/NewsSlider.module.scss';
import css from './styles/NewsSlider.css';
import useFetchNews from '../../hooks/useFetchNews';

const NewsSlider = () => {
  const { news, error } = useFetchNews();

  return (
    <article className={style.container}>
      {news.length && (
        <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} transitionTime={500}>
          {news.map(({ image, name }, i) => (
            <figure>
              <img src={image} alt={`Slide ${i}`} />
              <figcaption className='legend'>{name}</figcaption>
            </figure>
          ))}
        </Carousel>
      )}
      {error && <p>{error}</p>}
    </article>
  );
};

export default NewsSlider;
