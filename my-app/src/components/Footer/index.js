import React from 'react';

import copyright from '../../resources/copyright.png';

import './style.scss';

const Footer = () => {
	const date = new Date();
	console.log(date.getHours() + 'H' + date.getMinutes());
	const now = date.getHours() + 'H' + date.getMinutes();

	let activity = null;
	if (now > 0 + 'H' + 0) {
		activity = 'Sauve Gotham des griffes du Joker';
	} else if (now > 6 + 'H' + 0) {
		activity = 'dors ou fais du sport (en plus ça rime)';
	} else if (now > 8 + 'H' + 0) {
		activity = 'work hard';
	} else if (now > 18 + 'H' + 0) {
		activity = 'play hard';
	} else if (now > 20 + 'H' + 0) {
		activity = 'cuisine des sons';
	}

	return (
		<div className='footer'>
			<div>
				<img className='copyright' src={copyright} alt='copyright' />
				2021
			</div>
			<div className='footer_activities'>
				{' '}
				{now} Alors je {activity}
			</div>
			<div className='footer_detail'> détails </div>
		</div>
	);
};
export default Footer;
