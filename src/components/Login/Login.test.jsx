import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Login from './Login';
import { TextField, Button, Grid, Link } from '@material-ui/core';

configure({adapter: new Adapter()});

describe('<Login />', () => {
	let wrapper;
	let testinstance;

	beforeEach(() => {
		wrapper = renderer.create(<Login />);
		testinstance  = wrapper.root;
	});

	it('should render both <Links />', () => {
		expect(testinstance.findAllByType(Link)).toHaveLength(2);
	});

	it('should render both <TextField />s', () => {
		expect(testinstance.findAllByType(TextField)).toHaveLength(2);
	});

	it('should render a <Button />', () => {
		expect(testinstance.findAllByType(Button)).toHaveLength(1);
	});

	it('should render a container <Grid /> with two sub grids', () => {
		expect(testinstance.findAllByType(Grid)).toHaveLength(3);
	});

	it('email textfield is updated', () => {
		const text = 'admin';
		const wrapper = shallow(<TextField username={text} />);
		expect(wrapper.prop('username')).toEqual(text);
	});

	it('password textfield is updated', () => {
		const text = 'adminpassword';
		const wrapper = shallow(<TextField password={text} />);
		expect(wrapper.prop('password')).toEqual(text);
	});

	it('Should change the state of the password', () => {
		const handlePasswordChangeMock = jest.fn();
		const wrapper = shallow (<Login handlePasswordChange={handlePasswordChangeMock} />);
		wrapper.props().handlePasswordChange({password: 'newPass'});
		expect(handlePasswordChangeMock).toHaveBeenCalledTimes(1);
		expect(handlePasswordChangeMock).toHaveBeenCalledWith({password: 'newPass'});
	});

	it('Should change the state of the username', () => {
		const handleUsernameChangeMock = jest.fn();
		const wrapper = shallow (<Login handleUsernameChange={handleUsernameChangeMock} />);
		wrapper.props().handleUsernameChange({username: 'newUser'});
		expect(handleUsernameChangeMock).toHaveBeenCalledTimes(1);
		expect(handleUsernameChangeMock).toHaveBeenCalledWith({username: 'newUser'});
	});
});
