// IMPORT ACTIONS

import pokédex from '../components/Carousel/sample/POKEDEX.png';

// INTIAL STATE
const initialState = {
	projectsList: [
		{
			id: 1,
			name: 'GameHub',
			description:
				'Mon premier hub: Regroupement de 3 mini-jeux réalisés en amont',
			technos: 'NODE CSS EJS',
			image: './../sample/GameHub.png',
		},
		{
			id: 2,
			name: 'Pokédex',
			description:
				'Pokédex réalisé en créant et manipulant une base de données',

			technos: 'NODE SQL CSS EJS ',
			image: { pokédex },
		},
	],
};
// WHAT ACTIONS MUST ACT ON IN THE STATE

export default (state = initialState, action = {}) => {
	switch (action.type) {
		default:
			return state;
	}
};
