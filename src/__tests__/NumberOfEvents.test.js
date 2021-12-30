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

	test('check for change in input', () => {
		const obj = { target: {value: 10}};
		NumberOfEventsWrapper.find('.number-input').simulate('change', obj)
		expect(NumberOfEventsWrapper.state('number')).toBe(10);
	})
})