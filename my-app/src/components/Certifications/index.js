import React from 'react';

import './style.scss';

import anssiLogo from '../../resources/Anssi.png';
import opquastLogo from '../../resources/Logo-Opquast.png';
import oclockLogo from '../../resources/Oclock.png';

const Certifications = () => {
	return (
		<div className='certification'>
			<div className='certification_title'>Certifications</div>
			<a href='https://www.oclock.io'>
				<img
					alt='oclock-logo'
					className='certification_oclock_logo'
					src={oclockLogo}
				/>
				<div className='certification_name'>
					OCLOCK : ECOLE DE PROGRAMMATION WEB. LABELISEE GRANDE ECOLE DU
					NUMERIQUE. JAVASCRIPT FULLSTACK & SPECIALISATION REACT
				</div>
			</a>
			<a href='https://www.ssi.gouv.fr'>
				<img
					alt='anssi-logo'
					className='certification_anssi_logo'
					src={anssiLogo}
				/>
				<div className='certification_name'>
					AGENCE NATIONALE DE LA SECURITE DES SYSTEMES D'INFORMATION
				</div>
			</a>

			<a href='https://www.opquast.com'>
				<img
					alt='opquast-logo'
					className='certification_opquast_logo'
					src={opquastLogo}
				/>
				<div className='certification_name'>
					OPQUAST (OPEN QUALITY STANDARDS / BONNES PRATIQUES)
				</div>
			</a>
		</div>
	);
};
export default Certifications;
