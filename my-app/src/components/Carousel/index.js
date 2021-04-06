import React from 'react';

import Projects from './Projects';

import './style.scss';

const Carousel = ({ projectsList }) => (
	<div>
		<div className='carousel_title'>Quelques réalisations</div>
		<Projects projectsList={projectsList} />
	</div>
);
export default Carousel;
