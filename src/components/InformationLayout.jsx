import style from './informationLayout.module.css';

// import { store } from '../store';

// import PropTypes from 'prop-types';

export const InformationLayout = () => {

	// const { isDraw, isGameEnded, currentPlayer } = store.getState();

	// const checStatus = (player) => {

	// 	let str = 'Играем';
	// 	if (isDraw) {
	// 		str = 'Ничья';
	// 	} else if (isDraw === false && isGameEnded === true) {
	// 		str = `Победа: ${player}`;
	// 	} else if (isDraw === false && isGameEnded === false) {
	// 		str = `Ходит: ${player}`;
	// 	}
	// 	return str;
	// };

	return (
		<div className={style.info}>
			{/* <div>{checStatus(currentPlayer)}</div> */}
		</div>
	);
};

// InformationLayout.propTypes = {
//   isDraw: PropTypes.bool,
//   isGameEnded: PropTypes.bool,
//   currentPlayer: PropTypes.string,
// };
