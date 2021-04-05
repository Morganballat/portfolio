import React from 'react';
import Carousel from 'react-elastic-carousel';
import './style.scss';

const Projects = ({ projectsList }) => {
	console.log(projectsList);
	const projects = projectsList.map((project) => [
		<div>
			<div key={project.id} className='projects_carousel'>
				<img
					className='projects_project-image'
					src={project.image}
					alt={project.name}
				/>
				<h1 className='projects_project-title'>{project.name}</h1>

				<p>{project.technos}</p>
			</div>
			,
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
