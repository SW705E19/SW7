import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import RenderService from './RenderService/RenderService';
import { Button, Grid, Card, CardContent, CardActions, Typography, Avatar, CardMedia } from '@material-ui/core';

configure({adapter: new Adapter()});

describe('<Login />', () => {
	let wrapper;
	let testinstance;

	beforeEach(() => {
		wrapper = renderer.create(<RenderService />);
		testinstance  = wrapper.root;
	});

	it('should render both <Buttons />', () => {
		expect(testinstance.findAllByType(Button)).toHaveLength(2);
	});

	it('should render all <Card />s', () => {
		expect(testinstance.findAllByType(Card)).toHaveLength(3);
	});
    
	it('should render both <CardContent />s', () => {
		expect(testinstance.findAllByType(CardContent)).toHaveLength(2);
	});
    
	it('should render both <CardAction />s', () => {
		expect(testinstance.findAllByType(CardActions)).toHaveLength(2);
	});

	it('should render all the necessary <Grid />s', () => {
		expect(testinstance.findAllByType(Grid)).toHaveLength(5);
	});

	it('should render all the necessary <Typography />s', () => {
		expect(testinstance.findAllByType(Typography)).toHaveLength(5);
	});

	it('should render <Avatar />', () => {
		expect(testinstance.findAllByType(Avatar)).toHaveLength(1);
	});

	it('should render <CardMedia />', () => {
		expect(testinstance.findAllByType(CardMedia)).toHaveLength(1);
	});
});
