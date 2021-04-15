import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Gamehub from './sample/GameHub.png';
import Pokedex from './sample/POKEDEX.png';
import Acey from './sample/Acey-deucey.png';
import Yabon from './sample/Yabon_pronostiqueur.png';

import './style.scss';

const Slider = () => {
	return (
		<div className='carousel'>
			<div className='carousel_title'>Quelques réalisations</div>
			<Carousel className='projects'>
				<div key='1' className='projects_project'>
					<img src={Gamehub} alt='' className='projects_project-image' />
				</div>
				<div key='2'>
					<img src={Pokedex} alt='' className='projects_project-image' />
				</div>
				<div key='3'>
					<img src={Acey} alt='' className='projects_project-image' />
				</div>
				<div key='4'>
					<img src={Yabon} alt='' className='projects_project-image' />
				</div>
			</Carousel>
		</div>
	);
};
export default Slider;
