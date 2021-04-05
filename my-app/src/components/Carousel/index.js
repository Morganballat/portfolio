import React from 'react';

import Projects from './Projects';

import './style.scss';

const Carousel = ({ projectsList }) => (
	<div className='carousel_title'>
		<div>Quelques réalisations</div>
		<Projects projectsList={projectsList} />
	</div>
);
export default Carousel;
