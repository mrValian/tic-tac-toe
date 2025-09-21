
import { connect } from 'react-redux';
import { Component } from 'react';


export class OldInformationLayout extends Component {
	constructor(isDraw, isGameEnded, currentPlayer) {
		super(isDraw, isGameEnded, currentPlayer);
	}

		checStatus = (player) => {
		let str = 'Играем';
		if (this.props.isDraw) {
			str = 'Ничья';
		} else if (this.props.isDraw === false && this.props.isGameEnded === true) {
			str = `Победа: ${player}`;
		} else if (this.props.isDraw === false && this.props.isGameEnded === false) {
			str = `Ходит: ${player}`;
		}
		return str;
	};

	render() {
		return (
			<div className='text-blue-500'>
				<div>{this.checStatus(this.props.currentPlayer)}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
});

export const InformationLayout = connect(mapStateToProps)(OldInformationLayout);