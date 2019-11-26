import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import CreateUser from './CreateUser';
import { Container, Typography, TextField, Button } from '@material-ui/core';

configure({ adapter: new Adapter() });

describe('<CreateUser />', () => {
	let wrapper;
	let testinstance;

	beforeEach(() => {
		wrapper = renderer.create(<CreateUser />);
		testinstance = wrapper.root;
	});

	it('should render 9 <TextField />s', () => {
		expect(testinstance.findAllByType(TextField)).toHaveLength(9);
	});

	it('should render a <Button />', () => {
		expect(testinstance.findAllByType(Button)).toHaveLength(1);
	});

	it('should render 1 <Container />s', () => {
		expect(testinstance.findAllByType(Container)).toHaveLength(1);
	});

	it('should render 1 <Typography />s', () => {
		expect(testinstance.findAllByType(Typography)).toHaveLength(3);
	});
});
