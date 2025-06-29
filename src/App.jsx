// import { useState } from 'react';

import { Game } from './components';

import style from './app.module.css';

export const App = () => {
	return (
		<div className={style.app}>
			<Game />
		</div>
	);
};
