import React from 'react';

import './style.scss';

import js from '../../resources/javascript.png';
import html from '../../resources/html.png';
import css from '../../resources/css.png';
import node from '../../resources/node.png';
import react from '../../resources/react.png';
import redux from '../../resources/redux.png';

const TechnoBar = () => (
	<div className='bar-container'>
		<div className='techno_bar'>
			<img className='techno_bar_logo-html' src={html} alt='html' />
			<img className='techno_bar_logo' src={css} alt='css' />
			<img className='techno_bar_logo' src={js} alt='javascript' />
			<img className='techno_bar_logo' src={react} alt='react' />
			<img className='techno_bar_logo' src={redux} alt='redux' />
			<img className='techno_bar_logo-node' src={node} alt='node' />
		</div>
	</div>
);
export default TechnoBar;
