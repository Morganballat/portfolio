import React from 'react';
import Carousel from 'react-elastic-carousel';
import './style.scss';

const Projects = ({ projectsList }) => {
	console.log(projectsList);
	const projects = projectsList.map((project) => [
		<div key={project.id} className='projects_carousel'>
			<h1 className='projects_project-title'>{project.name}</h1>
			<div
				className='projects_project-image'
				style={{ backgroundImage: project.image }}
			/>
			<p>{project.technos}</p>
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
