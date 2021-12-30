import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class Event extends Component {

	state = {
		collapsed: true
	};

	handleClick = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	render() {
		const { collapsed } = this.state;
		const { event } = this.props;
		return (
			<div>
				<h2 className='event-summary'>{event.summary}</h2>
				<p className='start-time'>{event.start.dateTime} ({event.start.timeZone})</p>
				<p className='event-location'>@{event.summary} | {event.location}</p>

				<Button className={`${collapsed ? 'show' : 'hide'}-details`} onClick={this.handleClick}>
          {collapsed ? 'Show Details' : 'Hide Details'}
        </Button>

				{!collapsed &&
					<div className={`details ${this.state.collapsed ? 'hide' : 'show'}`}>
						<h3>About the event:</h3>
						<a href={event.htmlLink} target='_blank' rel='noreferrer'>
							See details on Google Calendar
						</a>
						<p>{event.description}</p>
					</div>
				}

			</div>
		)
	}
}

export default Event;