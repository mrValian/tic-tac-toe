import style from './fieldLayout.module.css';

import { store } from '../store';

// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const FieldLayout = () => {

	const [field, setField] = useState(store.getState().field);
	const [currentPlayer, setCurrentPlayer] = useState(store.getState().currentPlayer);
	const [isDraw, setIsDraw] = useState(store.getState().isDraw);
	const [isGameEnded, setIsGameEnded] = useState(store.getState().isGameEnded);

  useEffect(() => {

    const unsubscribe = store.subscribe(() => {
      setField(store.getState().field);
	  setCurrentPlayer(store.getState().currentPlayer);
	  setIsDraw(store.getState().isDraw);
	  setIsGameEnded(store.getState().isGameEnded);
    });

    return unsubscribe;
  }, []);

	const gameAction = (event) => {
		checkGameState();

		currentPlayer === 'X' ? store.dispatch({type: 'SET_CURRENT_PLAYER', payload: '0'}) : store.dispatch({type: 'SET_CURRENT_PLAYER', payload: 'X'});
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
		store.dispatch({type: 'SET_FIELD', payload: arr});
		// target.textContent = currentPlayer;
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
			store.dispatch({type: 'SET_GAME_END', payload: true});
			store.dispatch({type: 'SET_CURRENT_PLAYER', payload: 'X'});
			return 'x';
		} else if (win === '0') {
			store.dispatch({type: 'SET_GAME_END', payload: true});
			store.dispatch({type: 'SET_CURRENT_PLAYER', payload: '0'});
			return '0';
		}

		// let checkField = field.every((elem) => elem !== '');
		if (field.every((elem) => elem !== '') && win === '') {
			store.dispatch({type: 'SET_DRAW', payload: true});
			return 'draw';
		}

		return 'continue';
	};
	

	const stratOver = () => {
		store.dispatch({type: 'SET_DRAW', payload: false});
		store.dispatch({type: 'SET_GAME_END', payload: false});
		store.dispatch({type: 'SET_CURRENT_PLAYER', payload: 'X'});
		store.dispatch({type: 'SET_FIELD', payload: ['', '', '', '', '', '', '', '', '']});
	};

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
		<div>
			<div className={style.info}>
						<div>{checStatus(currentPlayer)}</div>
			</div>
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

// FieldLayout.propTypes = {
// 	field: PropTypes.array,
// 	setField: PropTypes.func,
// 	currentPlayer: PropTypes.string,
// 	setCurrentPlayer: PropTypes.func,
// 	setIsGameEnded: PropTypes.func,
// 	setIsDraw: PropTypes.func,
// 	isDraw: PropTypes.bool,
// 	isGameEnded: PropTypes.bool,
// };
