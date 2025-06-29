import { FieldLayout } from './FieldLayout';

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	isDraw,
	isGameEnded,
}) => {
	return (
		<div>
			<FieldLayout
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
