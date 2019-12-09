import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import{ ShowAllServices }  from './ShowAllServices';
import ServiceList from '../../containers/ServiceList/ServiceList';
import {Redirect} from 'react-router';


configure({adapter: new Adapter()});
describe('<ShowAllServices />', () => {
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
	
	it('rendered component', () => {
		const wrapper = shallow(<ShowAllServices t={key => key} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('renders ServiceList if it has services in state', () => {
		const wrapper = shallow(<ShowAllServices t={key => key} />);
		wrapper.setState({
			services: services
		});

		expect(wrapper.find(ServiceList)).toHaveLength(1);
	});

	it('does not render ServiceList if no services in state', () => {
		const wrapper = shallow(<ShowAllServices t={key => key} />);

		expect(wrapper.find(ServiceList)).toHaveLength(0);
	});

	it('renders Redirect if redirect function is called', () => {
		const wrapper = shallow(<ShowAllServices t={key => key} />);

		wrapper.instance().redirect(service.id);
		expect(wrapper.find(Redirect)).toHaveLength(1);
	});





});
