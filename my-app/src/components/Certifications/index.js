import React from 'react';

import './style.scss';

const Certifications = () => (
	<div className='certification'>
		<div className='certification_title'>Certifications</div>
		<a href='https://www.ssi.gouv.fr'>
			<div className='certification_name'>
				Agence nationale de la sécurité des systèmes d'information
			</div>
		</a>
		<a href='https://www.opquast.com'>
			<div className='certification_name'>OPQUAST (Open Quality Standards)</div>
		</a>
	</div>
);
export default Certifications;
