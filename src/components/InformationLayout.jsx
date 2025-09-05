import style from './informationLayout.module.css';

import { useSelector } from 'react-redux';
import {selectDraw, selectGameEnd, selectCurrentPlayer} from '../selectors';

export const InformationLayout = () => {
	const isDraw = useSelector(selectDraw);
	const isGameEnded = useSelector(selectGameEnd);
	const currentPlayer = useSelector(selectCurrentPlayer);

	const checStatus = (player) => {

		let str = 'Играем';
		if (isDraw) {
			str = 'Ничья';
		} else if (isDraw === false && isGameEnded === true) {
			str = `Победа: ${player}`;
		} else if (isDraw === false && isGameEnded === false) {
			str = `Ходит: ${player}`;
		}
		return str;
	};

	return (
		<div className={style.info}>
			<div>{checStatus(currentPlayer)}</div>
		</div>
	);
};
