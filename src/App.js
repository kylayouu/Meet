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
    numberOfEvents: 32
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
		this.setState({
			numberOfEvents: e.target.value
		})
	}

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} handleNumberChange={this.handleNumberChange} />
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;
