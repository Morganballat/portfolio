import React from 'react';

import portrait from '../../resources/Morgan.jpg';

import './style.scss';

const Picture = () => (
	<div className='picture'>
		<img className='picture_portrait' src={portrait} alt='Morgan' />
	</div>
);
export default Picture;
