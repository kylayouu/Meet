import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

// constructor(props)
// {
// 	super(props);
// 	console.log(props)
// }
	render() {
		const { errorText } = this.props;
		return (
			<div className='NumberOfEvents'>
				# of Events:
				<input 
				type='number'
				className='number-input'
				style={{ marginLeft: '1em'}}
				value={this.props.numberOfEvents}
				onChange={this.props.handleNumberChange}/>
				<ErrorAlert text={errorText} />
			</div>
		)
	}
}

export default NumberOfEvents