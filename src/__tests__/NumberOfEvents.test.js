import React from "react";
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
	let NumberOfEventsWrapper;
	beforeAll(() => {
		NumberOfEventsWrapper = shallow(<NumberOfEvents />)
	});

	test('render input box', () => {
		expect(NumberOfEventsWrapper.find('.number-input')).toHaveLength(1);
	});

	test('render results based on input', () => {
		const numberOfEvents = NumberOfEventsWrapper.prop('numberOfEvents');
		expect(NumberOfEventsWrapper.find('.number-input').prop('value')).toBe(numberOfEvents);
	});

})