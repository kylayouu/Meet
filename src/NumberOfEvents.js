import React, { Component } from "react";

class NumberOfEvents extends Component {
	state = {
		number: 0
	}

	handleNumberChange = (e) => {
		this.setState({
			number: e.target.value
		})
	}

	render() {
		return (
			<div className='NumberOfEvents'>
				<input 
				type='number'
				className='number-input'
				onChange={this.handleNumberChange}/>
			</div>
		)
	}
}

export default NumberOfEvents