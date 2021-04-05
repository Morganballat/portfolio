import React from 'react';
import Carousel from 'nuka-carousel';
import './style.scss';

import Gamehub from '../../../resources/Gamehub.png';

const Projects = () => (
	<div className='projects'>
		<Carousel>
			<img alt='Gamehub Project' src={Gamehub} />
		</Carousel>
	</div>
);
export default Projects;
