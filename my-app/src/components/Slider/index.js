import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Gamehub from './sample/GameHub.png';
import Pokedex from './sample/POKEDEX.png';
import Acey from './sample/Acey-deucey.png';
import Yabon from './sample/Yabon_pronostiqueur.png';
import Nasa from './sample/nasa-picture.png';
import Ofig from './sample/ofig.png';

import './style.scss';

const Slider = () => {
	return (
		<div className='carousel'>
			<div className='carousel_title'>Quelques réalisations</div>
			<Carousel className='projects' infiniteLoop='true' showThumbs='false'>
				<div key='1' className='projects_project'>
					<img src={Gamehub} alt='' className='projects_project-image' />
					<div className='overlay'>
						<p className='overlay_title'>GameHub</p>
						<p className='overlay_pres'>
							Un hub de 3 mini-jeux réalisés en JS.
						</p>
						<p className='overlay_tech'>NODE EJS CSS MIDDLEWARE</p>
					</div>
				</div>
				<div key='2'>
					<img src={Pokedex} alt='' className='projects_project-image' />
					<div className='overlay'>
						<p className='overlay_title'>Pokédex</p>
						<p className='overlay_pres'>
							20 ans plus tard, je recomplète le pokédex.
						</p>
						<p className='overlay_tech'>NODE EJS CSS</p>
					</div>
				</div>
				<div key='3'>
					<img src={Acey} alt='' className='projects_project-image' />
					<div className='overlay'>
						<p className='overlay_title'>Acey-deucey</p>
						<p className='overlay_pres'>Coder du hasard, pas par hasard.</p>
						<p className='overlay_tech'>JS CSS</p>
					</div>
				</div>
				<div key='4'>
					<img src={Yabon} alt='' className='projects_project-image' />
					<div className='overlay'>
						<p className='overlay_title'>Yabon Pronostiqueur</p>
						<p className='overlay_pres'>
							Une app de pronostiqueur sportif pour gagner un max de moula.
						</p>
						<p className='overlay_tech'>NODE REACT-REDUX SCSS API-ODDS</p>
					</div>
				</div>
				<div key='5'>
					<img src={Nasa} alt='' className='projects_project-image' />
					<div className='overlay'>
						<p className='overlay_title'>Nasa-pictures</p>
						<p className='overlay_pres'>
							La tête dans les étoiles, pour des étoiles dans les yeux.
						</p>
						<p className='overlay_tech'>REACT CSS API-APOD</p>
					</div>
				</div>
				<div key='6'>
					<img src={Ofig} alt='' className='projects_project-image' />
					<div className='overlay'>
						<p className='overlay_title'>Ofig</p>
						<p className='overlay_pres'>
							Une intégration pour s'intégrer aux développeurs.
						</p>
						<p className='overlay_tech'>HTML CSS </p>
					</div>
				</div>
			</Carousel>
		</div>
	);
};
export default Slider;
