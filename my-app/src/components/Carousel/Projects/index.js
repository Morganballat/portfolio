import React from 'react';
// import Carousel from 'react-elastic-carousel';
import './style.scss';

const Projects = ({ projectsList }) => {
	console.log(projectsList);
	const projects = projectsList.map((project) => [
		<div>
			<div key={project.id} className='projects_carousel'>
				<h1 className='projects_project-title'>{project.name}</h1>
				<img
					className='projects_project-image'
					src={project.image}
					alt={project.name}
				/>
				<p>{project.description}</p>
				<p>{project.technos}</p>
			</div>
		</div>,
	]);

	return (
		<div className='projects'>
			<div className='projects_project'>
				{projects}
				{/* Le carousel pour le site en mode bureau; j'affiche le site mobile avec les aperçu en mode cartes */}
				{/* <Carousel
					itemsToShow={1}
					autoPlaySpeed={7000}
					enableAutoPlay
					responsive
				>
					{projects}
				</Carousel> */}
			</div>
		</div>
	);
};
export default Projects;
