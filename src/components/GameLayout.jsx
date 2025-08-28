import { Information } from './Information';
import { Field } from './Field';

import style from './gameLayout.module.css';

export const GameLayout = () => {
	
	return (
		<div className={style.game}>
			<Information />
			<Field />
		</div>
	);
};
