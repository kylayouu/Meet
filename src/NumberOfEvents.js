import React, { Component } from "react";

class NumberOfEvents extends Component {
	state = {
		number: 32
	}

	handleNumberChange = (e) => {
		this.setState({
			number: e.target.value
		})
	}

	render() {
		return (
			<div className='NumberOfEvents'>
				Number of Events:
				<input 
				type='number'
				placeholder='32'
				className='number-input'
				onChange={this.handleNumberChange}/>
			</div>
		)
	}
}

export default NumberOfEvents