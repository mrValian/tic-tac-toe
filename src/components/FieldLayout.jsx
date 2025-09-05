import style from './fieldLayout.module.css';

import { store } from '../store';

import { useDispatch, useSelector } from 'react-redux';
import {selectDraw, selectGameEnd, selectCurrentPlayer, selectField} from '../selectors';
import { setCurrentPlayer, setDraw, setField, setGameEnd } from '../actions';

export const FieldLayout = () => {
	const dispatch = useDispatch();

	const isDraw = useSelector(selectDraw);
	const isGameEnded = useSelector(selectGameEnd);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const field = useSelector(selectField);

	const gameAction = (event) => {

		currentPlayer === 'X' ? dispatch(setCurrentPlayer('0')) : dispatch(setCurrentPlayer('X'));
		const { target } = event;
		let curentBlock = target.dataset.block;
		let arr = [];
		for (let i = 0; i < field.length; i++) {
			if (i === +curentBlock) {
				arr[i] = currentPlayer;
			} else {
				arr[i] = field[i];
			}
		}
		dispatch(setField(arr));
		checkGameState();
	};

	let win = '';
	if (field[0] === 'X' && field[1] === 'X' && field[2] === 'X') {
		win = 'X';
	} else if (field[0] === '0' && field[1] === '0' && field[2] === '0') {
		win = '0';
	} else if (field[3] === 'X' && field[4] === 'X' && field[5] === 'X') {
		win = 'X';
	} else if (field[3] === '0' && field[4] === '0' && field[5] === '0') {
		win = '0';
	} else if (field[6] === 'X' && field[7] === 'X' && field[8] === 'X') {
		win = 'X';
	} else if (field[6] === '0' && field[7] === '0' && field[8] === '0') {
		win = '0';
	} else if (field[0] === 'X' && field[3] === 'X' && field[6] === 'X') {
		win = 'X';
	} else if (field[0] === '0' && field[3] === '0' && field[6] === '0') {
		win = '0';
	} else if (field[1] === 'X' && field[4] === 'X' && field[7] === 'X') {
		win = 'X';
	} else if (field[1] === '0' && field[4] === '0' && field[7] === '0') {
		win = '0';
	} else if (field[2] === 'X' && field[5] === 'X' && field[8] === 'X') {
		win = 'X';
	} else if (field[2] === '0' && field[5] === '0' && field[8] === '0') {
		win = '0';
	} else if (field[0] === 'X' && field[4] === 'X' && field[8] === 'X') {
		win = 'X';
	} else if (field[0] === '0' && field[4] === '0' && field[8] === '0') {
		win = '0';
	} else if (field[2] === 'X' && field[4] === 'X' && field[6] === 'X') {
		win = 'X';
	} else if (field[2] === '0' && field[4] === '0' && field[6] === '0') {
		win = '0';
	}

	const checkGameState = () => {
		if (win === 'X') {
			store.dispatch(setGameEnd(true));
			store.dispatch(setCurrentPlayer('X'));
			return 'x';
		} else if (win === '0') {
			store.dispatch(setGameEnd(true));
			store.dispatch(setCurrentPlayer('0'));
			return '0';
		}

		// let checkField = field.every((elem) => elem !== '');
		if (field.every((elem) => elem !== '') && win === '') {
			store.dispatch(setDraw(true));
			return 'draw';
		}

		return 'continue';
	};
	

	const stratOver = () => {
		store.dispatch(setDraw(false));
		store.dispatch(setGameEnd(false));
		store.dispatch(setCurrentPlayer('X'));
		store.dispatch(setField(['', '', '', '', '', '', '', '', '']));
	};

	return (
		<div>
			<div className={style.field}>
				{field.map((elem, i) => (
					<div
						onClick={(e) => (isDraw || isGameEnded ? '' : gameAction(e))}
						data-block={i}
						className={style.block}
						key={i}
					>
						{elem}
					</div>
				))}
				<div className={style['btn-wrap']}>
					<button onClick={stratOver}>Начать Заново</button>
				</div>
			</div>
		</div>
		
	);
};
