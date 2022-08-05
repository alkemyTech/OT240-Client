import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import css from './styles/NewsSlider.css';
import news from '../../news.mock';

const NewsSlider = () => {
  const toShow = news.slice(0, 4);
  return (
    <article>
      {news.length && (
        <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} transitionTime={500}>
          {toShow.map(({ image, name }, i) => (
            <figure key={i}>
              <img src={image} alt={`Slide ${i}`} />
              <figcaption className='legend'>{name}</figcaption>
            </figure>
          ))}
        </Carousel>
      )}
    </article>
  );
};

export default NewsSlider;
