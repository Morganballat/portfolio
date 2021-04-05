// IMPORT ACTIONS

//IMPORT PROJECTS IMAGES
import GameHub from '../resources/GameHub.png';

// INTIAL STATE
const initialState = {
	projectsList: [
		{
			id: 1,
			name: 'GameHub',
			image: { GameHub },
			technos: 'Node.js CSS',
		},
		{
			id: 1,
			name: 'GameHub',
			image: { GameHub },
			technos: 'Node.js CSS',
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
