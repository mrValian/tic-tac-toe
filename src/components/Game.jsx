import { useState } from 'react';
import { GameLayout } from './GameLayout';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const WIN_PATTERNS = [
	    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
	    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
	    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
	];

	return (
		<div>
			<GameLayout
				field={field}
				setField={setField}
				isDraw={isDraw}
				setIsDraw={setIsDraw}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
			/>
		</div>
	);
};
