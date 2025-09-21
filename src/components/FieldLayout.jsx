
import { Component } from 'react';

import { connect } from 'react-redux';
import { setCurrentPlayer, setDraw, setField, setGameEnd } from '../actions';

export class OldFieldLayout extends Component {
	constructor(field, isDraw, isGameEnded, currentPlayer, dispatch) {
		super(field, isDraw, isGameEnded, currentPlayer, dispatch);
		this.state = {
			win: '',
		}
	}

	gameAction = (event) => {
		this.props.currentPlayer === 'X' ? this.props.dispatch(setCurrentPlayer('0')) : this.props.dispatch(setCurrentPlayer('X'));
		const { target } = event;
		let curentBlock = target.dataset.block;
		let arr = [];
		for (let i = 0; i < this.props.field.length; i++) {
			if (i === +curentBlock) {
				arr[i] = this.props.currentPlayer;
			} else {
				arr[i] = this.props.field[i];
			}
		}
		this.props.dispatch(setField(arr));

		this.checkStatusGame();
	};

	checkStatusGame = () => {
		if (this.props.field[0] === 'X' && this.props.field[1] === 'X' && this.props.field[2] === 'X') {
			this.setState({win: 'X'});
		} else if (this.props.field[0] === '0' && this.props.field[1] === '0' && this.props.field[2] === '0') {
			this.setState({win: '0'});
		} else if (this.props.field[3] === 'X' && this.props.field[4] === 'X' && this.props.field[5] === 'X') {
			this.setState({win: 'X'});
		} else if (this.props.field[3] === '0' && this.props.field[4] === '0' && this.props.field[5] === '0') {
			this.setState({win: '0'});
		} else if (this.props.field[6] === 'X' && this.props.field[7] === 'X' && this.props.field[8] === 'X') {
			this.setState({win: 'X'});
		} else if (this.props.field[6] === '0' && this.props.field[7] === '0' && this.props.field[8] === '0') {
			this.setState({win: '0'});
		} else if (this.props.field[0] === 'X' && this.props.field[3] === 'X' && this.props.field[6] === 'X') {
			this.setState({win: 'X'});
		} else if (this.props.field[0] === '0' && this.props.field[3] === '0' && this.props.field[6] === '0') {
			this.setState({win: '0'});
		} else if (this.props.field[1] === 'X' && this.props.field[4] === 'X' && this.props.field[7] === 'X') {
			this.setState({win: 'X'});
		} else if (this.props.field[1] === '0' && this.props.field[4] === '0' && this.props.field[7] === '0') {
			this.setState({win: '0'});
		} else if (this.props.field[2] === 'X' && this.props.field[5] === 'X' && this.props.field[8] === 'X') {
			this.setState({win: 'X'});
		} else if (this.props.field[2] === '0' && this.props.field[5] === '0' && this.props.field[8] === '0') {
			this.setState({win: '0'});
		} else if (this.props.field[0] === 'X' && this.props.field[4] === 'X' && this.props.field[8] === 'X') {
			this.setState({win: 'X'});
		} else if (this.props.field[0] === '0' && this.props.field[4] === '0' && this.props.field[8] === '0') {
			this.setState({win: '0'});
		} else if (this.props.field[2] === 'X' && this.props.field[4] === 'X' && this.props.field[6] === 'X') {
			this.setState({win: 'X'});
		} else if (this.props.field[2] === '0' && this.props.field[4] === '0' && this.props.field[6] === '0') {
			this.setState({win: '0'});
		}

		this.checkGameState();
	}

		checkGameState = () => {
			if (this.state.win === 'X') {
				this.props.dispatch(setGameEnd(true));
				this.props.dispatch(setCurrentPlayer('X'));
				return 'x';
			} else if (this.state.win === '0') {
				this.props.dispatch(setGameEnd(true));
				this.props.dispatch(setCurrentPlayer('0'));
				return '0';
			}

			if (this.props.field.every((elem) => elem !== '') && this.state.win === '') {
				this.props.dispatch(setDraw(true));
				return 'draw';
			}

			return 'continue';
		};

	startOver = () => {
		this.props.dispatch(setDraw(false));
		this.props.dispatch(setGameEnd(false));
		this.props.dispatch(setCurrentPlayer('X'));
		this.props.dispatch(setField(['', '', '', '', '', '', '', '', '']));
	};

	render() {
		return (
			<div>
			<div className='flex flex-wrap'>
				{this.props.field.map((elem, i) => (
					<div
						onClick={(e) => (this.props.isDraw || this.props.isGameEnded ? '' : this.gameAction(e))}
						data-block={i}
						className='w-30 h-30 border border-indigo-600 m-1 p-7 text-center text-5xl box-border'
						key={i}
					>
						{elem}
					</div>
				))}
				<div className='m-auto'>
					<button onClick={this.startOver}>Начать Заново</button>
				</div>
			</div>
		</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	field: state.field,
});

export const FieldLayout = connect(mapStateToProps)(OldFieldLayout);