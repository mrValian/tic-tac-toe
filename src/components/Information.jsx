import { InformationLayout } from './InformationLayout';

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<div>
			<InformationLayout
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
		</div>
	);
};
