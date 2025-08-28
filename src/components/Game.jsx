import { useState } from 'react';
import { GameLayout } from './GameLayout';

// import { store } from '../store';

export const Game = () => {
	const WIN_PATTERNS = [
	    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
	    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
	    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
	];

	// const { name, age, email, phone } = store.getState();

	const onUserUpdate = () => {
		// const newUserData = {name: 'alex', age: 30, email: '111@v.ru', phone: 93799992};

		// store.dispatch({type: 'SET_CURRENT_PLAYER', payload: 'X'});

		// store.subscribe(() => console.log(store.getState()));
	};

	return (
		<div>
			<GameLayout/>
			<button onClick={onUserUpdate}>send</button>
		</div>
	);
};