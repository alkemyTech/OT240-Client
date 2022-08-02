import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import style from './styles/Slider.module.scss';

const Slider = ({ slides }) => {
  const [activeNew, setActiveNew] = React.useState(slides[0]);

  return (
    <article>
      <Carousel
        onChange={(i) => setActiveNew(slides[i])}
        selectedItem={0}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        transitionTime={500}>
        {slides.map(({ image }, i) => (
          <figure key={i}>
            <img src={image} alt={`Slide ${i}`} />
          </figure>
        ))}
      </Carousel>
      <section className={style.content}>
        <h2>{activeNew.name}</h2>
        <p>{activeNew.content}</p>
      </section>
    </article>
  );
};

export default Slider;
