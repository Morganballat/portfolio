import React from 'react';

import './style.scss';

const Contact = () => (
	<div className='contact'>
		<div className='contact_title'>Contacts</div>
		<div className='contact_device-email'>MGP.BALLAT@GMAIL.COM</div>
		<a href='"tel:+33767993559'>
			<div className='contact_device'>+33 7 67 99 35 59</div>
		</a>
		<a href='https://www.linkedin.com/in/morgan-b-26b69112b'>
			<div className='contact_device'>LINKEDIN</div>
		</a>
		<a href='https://github.com/Morganballat'>
			<div className='contact_device'>GITHUB</div>
		</a>
	</div>
);
export default Contact;
