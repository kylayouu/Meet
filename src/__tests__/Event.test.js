import React from "react";
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from "../mock-data";

describe('<Event /> component', () => {
	let EventWrapper;
	let event = mockData[0];
	beforeAll(() => {
		EventWrapper = shallow(<Event event={event}/>);
	});

	test('render Event title', () => {
		expect(EventWrapper.find('.event-summary')).toHaveLength(1);
	})

	test('render Event start time with timezone', () => {
		expect(EventWrapper.find('.start-time')).toHaveLength(1);
	})

	test('render Event location', () => {
		expect(EventWrapper.find('.event-location')).toHaveLength(1);
	})

	test('render Show Details button', () => {
		expect(EventWrapper.find('.show-details')).toHaveLength(1);
	})

	test('click Show Details button and see expanded details', () => {
		EventWrapper.setState({
			collapsed: true
		});
		EventWrapper.find('.show-details').simulate('click');
		expect(EventWrapper.state('collapsed')).toBe(false);
		expect(EventWrapper.find('.details')).toHaveLength(1);
	});

	test('click Hide Details button to collapse details', () => {
		EventWrapper.setState({
			collapsed: false
		});
		EventWrapper.find('.hide-details').simulate('click');
		expect(EventWrapper.state('collapsed')).toBe(true);
	})
	
})