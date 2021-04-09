import React from 'react';

import './style.scss';

import anssiLogo from '../../resources/Anssi.png';
import opquastLogo from '../../resources/Logo-Opquast.png';

const Certifications = () => (
	<div className='certification'>
		<div className='certification_title'>Certifications</div>

		<a href='https://www.ssi.gouv.fr'>
			<img
				alt='anssi-logo'
				className='certification_anssi_logo'
				src={anssiLogo}
			/>
			<div className='certification_name'>
				Agence nationale de la sécurité des systèmes d'information
			</div>
		</a>

		<a href='https://www.opquast.com'>
			<img
				alt='opquast-logo'
				className='certification_opquast_logo'
				src={opquastLogo}
			/>
			<div className='certification_name'>OPQUAST (Open Quality Standards)</div>
		</a>
	</div>
);
export default Certifications;
