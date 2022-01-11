import React, { Component } from 'react';
import { extractLocations, getEvents } from './api';
import './App.css';
import CitySearch from './CitySearch';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';
import './nprogress.css';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    errorText: ''
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      console.log()
      this.setState({ 
        events, 
        locations: extractLocations(events) 
      });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location).slice(0, eventCount);
      this.setState({
        events: locationEvents
      });
    });
  }

  handleNumberChange = (e) => {
    let value = e.target.value;
    if (value <= 0) {
      this.setState({
        numberOfEvents: value,
        errorText: 'Please enter a number greater than 0.'
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: ''
      });
    }
	}

  render() {
    return (
      <div className="App">
        <h1>Meet App</h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} handleNumberChange={this.handleNumberChange} errorText={this.state.errorText} />
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;
