import React from 'react';

import './style.scss';

// IMPORT DES COMPOSANTS OU CONTAINERS
import Header from '../Header';
import Job from '../Job';
import Presentation from '../Presentation';
import Carousel from '../Carousel';
import Contact from '../Contact';
import Footer from '../Footer';
import TechnoBar from '../TechnoBar';

function App() {
	return (
		<div className='app'>
			<Header />
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
