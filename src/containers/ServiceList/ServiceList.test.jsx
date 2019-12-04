import { mount, configure } from 'enzyme';
import React from 'react';
import ServiceList from './ServiceList';
import Adapter from 'enzyme-adapter-react-16';
import { Card } from '@material-ui/core';

configure({adapter: new Adapter()});

describe('<ServiceList />', () => {
	const service = {
		name: 'test',
		id: 1,
		tutorInfo: {
			user: {
				firstName: 'testtur',
				lastName: 'testtursen'
			}
		}
	};
	const services = Array(5).fill(service);
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<ServiceList />);
	});

	it('ServiceList', () => {
		expect(ServiceList).toBeDefined();
	});

	it('should render correctly', () => {
		wrapper.setProps({
			servicesPerLine: 4,
			services: services
		});
		expect(wrapper.debug()).toMatchSnapshot();
	});

	it('should render five Card components', () => {
		wrapper.setProps({
			services: services,
			servicesPerLine: 4
		});
		expect(wrapper.find(Card)).toHaveLength(5);
	});

	it('should not render any cards when undefined', () => {
		expect(wrapper.find(Card)).toHaveLength(0);
	});

	it('onChange is called when card is clicked', () => {
		const mockCallBack = jest.fn();
		wrapper.setProps({
			services: [service],
			servicesPerLine: 1,
			onClick: mockCallBack

		});
		wrapper.find(Card).prop('onClick')();
		expect(mockCallBack).toHaveBeenCalled();
	});

	it('onChange is called with serviceId as parameter', () => {
		const mockCallBack = jest.fn();
		wrapper.setProps({
			services: [service],
			servicesPerLine: 1,
			onClick: mockCallBack
		});
		const serviceId = service.id;
		wrapper.find(Card).prop('onClick')();
		expect(mockCallBack).toHaveBeenCalledWith(serviceId);
	});
});
