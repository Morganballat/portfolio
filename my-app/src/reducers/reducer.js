// IMPORT ACTIONS

//IMPORT PROJECTS IMAGES
// import GameHub from '../resources/GameHub.png';

// INTIAL STATE
const initialState = {
	projectsList: [
		{
			id: 1,
			name: 'GameHub',
			// image: { GameHub },
			// image: '../../../resources/GameHub',
			description: 'Mon premier hub: Regroupement de 3 mini-jeux',
			technos: 'Node.js CSS EJS',
		},
		{
			id: 2,
			name: 'GameHubd',
			// image: { GameHub },

			technos: 'Node.js CSS ',
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
