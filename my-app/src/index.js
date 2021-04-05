import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware());

const store = createStore(rootReducer, enhancers);

const rootReactElement = (
	<Provider store={store}>
		<App />
	</Provider>
);

const target = document.getElementById('root');
render(rootReactElement, target);
