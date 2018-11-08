import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

// initial app state
const initialState = {
	userLogged: false,
};

// redux reducers
const myReducer = (state, action) => {
	if(action.type === "USER_LOGGED_IN") {
		return { userLogged: true };
	}
	if(action.type === "USER_LOGGED_OUT") {
		return { userLogged: false };
	}
	return state;
};

// store
const store = createStore(myReducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
