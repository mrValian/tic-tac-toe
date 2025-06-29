import style from './fieldLayout.module.css';

import PropTypes from 'prop-types';

export const FieldLayout = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	isDraw,
	isGameEnded,
}) => {
	const gameAction = (event) => {
		currentPlayer === 'X' ? setCurrentPlayer('0') : setCurrentPlayer('X');
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
		setField(arr);
		target.textContent = currentPlayer;
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

	if (win === 'X') {
		setIsGameEnded(true);
		setCurrentPlayer('X');
	} else if (win === '0') {
		setIsGameEnded(true);
		setCurrentPlayer('0');
	}

	let checkField = field.every((elem) => elem !== '');
	if (checkField && win === '') {
		setIsDraw(true);
	}

	const stratOver = () => {
		setIsDraw(false);
		setIsGameEnded(false);
		setCurrentPlayer('X');
		setField(['', '', '', '', '', '', '', '', '']);
	};

	return (
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
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};
