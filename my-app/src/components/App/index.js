import React from 'react';

import './style.scss';

// IMPORT DES COMPOSANTS OU CONTAINERS
import Header from '../Header';
import Job from '../Job';
import Presentation from '../Presentation';
import Carousel from '../../containers/Carousel';
import Contact from '../Contact';
import Footer from '../Footer';
import TechnoBar from '../TechnoBar';
import Picture from '../Picture';

function App() {
	return (
		<div className='app'>
			<Header />
			<Picture />
			<Job />
			<TechnoBar />
			<Presentation />
			<Carousel />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
