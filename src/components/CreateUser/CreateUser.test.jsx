import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreateUser from './CreateUser';
import { Container, TextField, Button, Grid, Typography } from '@material-ui/core';


configure({adapter: new Adapter()});

describe('<CreateUser />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<CreateUser />);
	});

	it('should render a <Container />', () => {
		expect(wrapper.find(Container)).toHaveLength(1);
	});

	it('should render one <Typography />', () => {
		expect(wrapper.find(Typography)).toHaveLength(1);
	});

	it('should render 7 <TextField />s', () => {
		expect(wrapper.find(TextField)).toHaveLength(7);
	});

	it('should render a <Button />', () => {
		expect(wrapper.find(Button)).toHaveLength(1);
	});

	it('should render a container <Grid /> with 12 sub grids', () => {
		expect(wrapper.find(Grid)).toHaveLength(12);
	});
}); 