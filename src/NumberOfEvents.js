import React, { Component } from "react";

class NumberOfEvents extends Component {
// constructor(props)
// {
// 	super(props);
// 	console.log(props)
// }
	render() {
		return (
			<div className='NumberOfEvents'>
				# of Events:
				<input 
				type='number'
				className='number-input'
				style={{ marginLeft: '1em'}}
				value={this.props.numberOfEvents}
				onChange={this.props.handleNumberChange}/>
			</div>
		)
	}
}

export default NumberOfEvents