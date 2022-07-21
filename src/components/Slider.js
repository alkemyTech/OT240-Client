import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Slider = ({ slides }) => {
	return (
		<article className="Slider">
			<Carousel
				autoPlay={true}
				showArrows={false}
				infiniteLoop={true}
				showIndicators={false}
				showStatus={false}
				showThumbs={false}
				transitionTime={1500}
				interval={5000}
			>
				{slides.map(({ imageUrl, text }, i) => (
					<figure key={i}>
						<img src={imageUrl} alt={`Slide ${i}`} />
						<figcaption className="legend">{text}</figcaption>
					</figure>
				))}
			</Carousel>
		</article>
	);
};

export default Slider;
