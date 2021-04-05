import React from 'react';

import copyright from '../../resources/copyright.png';

import './style.scss';

const Footer = () => (
	<div className='footer'>
		<div>
			<img className='copyright' src={copyright} alt='copyright' />
			2021
		</div>
		<div className='footer_activities'> hour and activity</div>
		<div className='footer_detail'> détails </div>
	</div>
);
export default Footer;
