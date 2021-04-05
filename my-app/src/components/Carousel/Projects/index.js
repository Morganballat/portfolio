import React from 'react';
import Carousel from 'react-elastic-carousel';
import './style.scss';

import Gamehub from '../../../resources/Gamehub.png';

const Projects = ({}) => {
	const projectsList = [{ Gamehub }];
	const projects = projectsList.map((project) => [
		<div key={project.id} className='projects_carousel'>
			<p
				className='projects_project-image'
				style={{ backgroundImage: project.Gamehub }}
			/>
			{/* <p className='projects_project-outro'>{project.firstname}</p> */}
		</div>,
	]);

	return (
		<div className='projects'>
			<div className='projects_project'>
				<Carousel
					itemsToShow={1}
					autoPlaySpeed={7000}
					enableAutoPlay
					responsive
				>
					{projects}
				</Carousel>
			</div>
		</div>
	);
};
export default Projects;
