import React, { Component } from 'react';
import { extractLocations, getEvents } from './api';
import './App.css';
import CitySearch from './CitySearch';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import './nprogress.css';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(', ').shift();
      return {city, number};
    })
    return data;
  };

  render() {
    return (
      <div className="App">
        <h1>Meet App</h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} handleNumberChange={this.handleNumberChange} errorText={this.state.errorText} />
        
        <div className='data-vis-wrapper'>
          <EventGenre events={this.state.events} />
          <ResponsiveContainer height={400}>
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type='category' dataKey='city' name='city'  />
              <YAxis type='number' dataKey='number' name='number of events' allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;