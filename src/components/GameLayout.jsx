import { OldInformation } from './Information';
import { OldField } from './Field';

import { Component } from 'react';


export class OldGameLayout extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='w-sm m-auto'>
				<OldInformation />
				<OldField />
			</div>
		);
	}
}
