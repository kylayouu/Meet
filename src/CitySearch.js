import React, { Component } from 'react';
import { InfoAlert } from './Alert';
import { Container, Row, Col } from 'react-bootstrap';

class CitySearch extends Component {
	state = {
		query: '',
		suggestions: [],
		showSuggestions: undefined
	}

	handleInputChanged = (event) => {
		const value = event.target.value;
		const suggestions = this.props.locations.filter((location) => {
			return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
		});
		if (suggestions.length === 0) {
			this.setState({
				query: value,
				infoText: 'We cannot find the city you are looking for. Please try another city.'
			});
		} else {
			this.setState({
				query: value,
				suggestions,
				infoText: ''
			});
		}
	};

	handleItemClicked = (suggestion) => {
		this.setState({
			query: suggestion,
			suggestions: [],
			showSuggestions: false,
			infoText: ''
		});
		console.log(this.props.numberOfEvents)

		this.props.updateEvents(suggestion, this.props.numberOfEvents);
	};

	render() {
		return (
			<div className='CitySearch'>
				<InfoAlert text={this.state.infoText} />
				<input 
					type='text' 
					className='city'
					placeholder='Search for a city' 
					value={this.state.query} 
					onChange={this.handleInputChanged}
					onFocus={() => { this.setState({ showSuggestions: true }) }}
				/>		
				<ul className='suggestions' style={this.state.showSuggestions ? {} : { display: 'none' }}>
					{this.state.suggestions.map((suggestion) => (
						<li 
						key={suggestion}
						onClick={() => this.handleItemClicked(suggestion)}
						>{suggestion}</li>
					))}
					<li key='all' onClick={() => this.handleItemClicked('all')}>
						<b>See all cities</b>
					</li>
				</ul>
			</div>
		)
	}
}

export default CitySearch;