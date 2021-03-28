import React from 'react';

import copyright from '../../resources/copyright.png';

import './style.scss';

const Footer = () => (
	<div className='footer'>
		<div>
			<img className='copyright' src={copyright} alt='copyright' />
			2021
		</div>
		<div> hour and activity</div>
		<div> détails </div>
	</div>
);
export default Footer;
