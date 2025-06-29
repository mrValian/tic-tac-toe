import { Information } from './Information';
import { Field } from './Field';

import style from './gameLayout.module.css';

export const GameLayout = ({
	field,
	setField,
	isDraw,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
	currentPlayer,
	setCurrentPlayer,
}) => {
	return (
		<div className={style.game}>
			<Information
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<Field
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
			/>
		</div>
	);
};
