import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './style.scss';

// IMPORT DES COMPOSANTS OU CONTAINERS
import Header from '../Header';
import Job from '../Job';
import Presentation from '../Presentation';
import Slider from '../../components/Slider';
import Contact from '../Contact';
import Footer from '../Footer';
import TechnoBar from '../TechnoBar';
import Picture from '../Picture';
import Certifications from '../Certifications';

function App() {
	return (
		<div className='app'>
			<Header />
			<Picture />
			<Job />
			<TechnoBar />
			<Presentation />
			<Certifications />
			<Slider />
			<Zoom>
				<Contact />
			</Zoom>
			<Footer />
		</div>
	);
}

export default App;
