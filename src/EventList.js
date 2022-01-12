import React, { Component } from 'react';
import Event from './Event';
import { Container, Row, Col } from 'react-bootstrap';
import { InfoAlert } from './Alert';

class EventList extends Component {
	render() {
		const { events } = this.props;
		return (
			<Container className='event-list-container'>
				{!navigator.onLine ? 
				(<InfoAlert text="You are offline! You're looking at cached data." />) : ('')
				}
				<ul className='EventList'>
					<Row className='event-list-row'>
						{events.map(event =>
							<Col md={8} xl={5} className='event-list' key={event.id}>
								<li>
									<Event event={event} />
								</li>
							</Col>
						)}
					</Row>
				</ul>
			</Container>
		)
	}
}

export default EventList;