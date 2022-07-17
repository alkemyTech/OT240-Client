import React from 'react';

import Slider from '../components/Slider';

const sliderContents = [
	{ imageUrl: '/images/blog-img-01.jpg', text: 'Awesome slide description' },
	{ imageUrl: '/images/blog-img-02.jpg', text: 'Awesome slide description' },
	{ imageUrl: '/images/blog-img-03.jpg', text: 'Awesome slide description' },
];

const News = () => {
	return (
		<main>
			<h1>News</h1>
			<Slider slides={sliderContents} />
			<section>
				<h2>This is the News section</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Error at
					consectetur voluptatum repellendus magnam ab fugiat dolorum, nulla
					saepe eveniet mollitia voluptatibus dolore ut. Doloribus tempora nam
					nihil ad labore?
				</p>
			</section>
		</main>
	);
};

export default News;
