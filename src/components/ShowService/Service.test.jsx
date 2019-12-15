import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import RenderService from './RenderService/RenderService';
import { Button, Grid, Card, CardContent, CardActions, Typography, Avatar, CardMedia, Divider, Box } from '@material-ui/core';

configure({adapter: new Adapter()});

describe('<RenderService />', () => {
	let wrapper;
	let testinstance;

	const service = {
		name: 'Service name',
		description: 'And this is my service',
		tutorInfo: {
			description: 'I am a tutor',
			user: {
				firstName: 'Per',
				lastName: 'Hansen',
			},
		},
		categories: [
			{
				name: 'Category1',
			}, {
				name: 'Category2',
			}
		],
	};

	const avgRating = {
		avg: '2.5'
	};

	beforeEach(() => {
		wrapper = renderer.create(<RenderService service={service} ratingValue={3} avgRating={avgRating}/>);
		testinstance  = wrapper.root;
	});

	it('should render all <Buttons />', () => {
		expect(testinstance.findAllByType(Button)).toHaveLength(3);
	});

	it('should render all <Card />s', () => {
		expect(testinstance.findAllByType(Card)).toHaveLength(4);
	});
    
	it('should render both <CardContent />s', () => {
		expect(testinstance.findAllByType(CardContent)).toHaveLength(2);
	});
    
	it('should render all <CardAction />s', () => {
		expect(testinstance.findAllByType(CardActions)).toHaveLength(3);
	});

	it('should render all the necessary <Grid />s', () => {
		expect(testinstance.findAllByType(Grid)).toHaveLength(7);
	});

	it('should render all the necessary <Typography />s', () => {
		expect(testinstance.findAllByType(Typography)).toHaveLength(7);
	});

	it('should render <Avatar />', () => {
		expect(testinstance.findAllByType(Avatar)).toHaveLength(1);
	});

	it('should render <CardMedia />', () => {
		expect(testinstance.findAllByType(CardMedia)).toHaveLength(1);
	});

	it('should render all <Divider />', () => {
		expect(testinstance.findAllByType(Divider)).toHaveLength(3);
	});

	it('should render all <Box />', () => {
		expect(testinstance.findAllByType(Box)).toHaveLength(3);
	});
});
