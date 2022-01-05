import React, { Component } from 'react';
import Event from './Event';
import { Container, Row, Col } from 'react-bootstrap';
import './event-list.css';

class EventList extends Component {
	render() {
		const { events } = this.props;
		return (
			<Container className='event-list-container'>
				<Row>
						<ul className='EventList'>
							{events.map(event =>
								<Col className='event-list' key={event.id}>
									<li>
										<Event event={event} />
									</li>
								</Col>
							)}
						</ul>
				</Row>
			</Container>
		)
	}
}

export default EventList;