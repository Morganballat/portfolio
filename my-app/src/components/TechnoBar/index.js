import React from 'react';

import './style.scss';

import js from '../../resources/javascript.png';
import html from '../../resources/html.png';
import css from '../../resources/css.png';
import node from '../../resources/node.png';
import react from '../../resources/react.png';
import redux from '../../resources/redux.png';
import sql from '../../resources/sql.png';
import git from '../../resources/git.png';

const TechnoBar = () => (
	<div className='techno_bar'>
		<div className='techno_bar_line-1'>
			<img className='techno_bar_logo-html' src={html} alt='html' />
			<img className='techno_bar_logo-css' src={css} alt='css' />
			<img className='techno_bar_logo-js' src={js} alt='javascript' />
			<img className='techno_bar_logo-sql' src={sql} alt='sql' />
		</div>

		<div className='techno_bar_line-2'>
			<img className='techno_bar_logo-react' src={react} alt='react' />
			<img className='techno_bar_logo-redux' src={redux} alt='redux' />
			<img className='techno_bar_logo-node' src={node} alt='node' />
		</div>
		<p className='techno_bar_sentence'>
			Ouvert à toute technologie! (mais JS c'est pas mal)
		</p>
		<div className='techno_bar_line-3'>
			<img className='techno_bar_logo-git' src={git} alt='git' />
		</div>
	</div>
);
export default TechnoBar;
