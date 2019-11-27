import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import EditService from './EditService';
import { TextField, Button, Grid, Link } from '@material-ui/core';

configure({adapter: new Adapter()});

describe('<EditService />', () => {
	let wrapper;
	let testinstance;
    
	const service = {
		id: 1,
		name: 'service',
		description: 'I am a service',
		tutorInfo: {
			id: 1
		},
		categories: [
			{
				name: 'category1',
				description: 'category1 description'
			},
			{
				name: 'category2',
				description: 'category2 description'
			}
		]
	};

	const categories = [
		{
			name: 'category1',
			description: 'category1 description'
		},
		{
			name: 'category2',
			description: 'category2 description'
		},
		{
			name: 'category3',
			description: 'category3 description'
		}
	];

	const props = {
		match: {
			params: {
				id: 1
			}
		}
	};

	const chosenCategoryNames = ['category1', 'category2'];

	function componentDidMount (){
		return;
	}

	beforeEach(() => {
		wrapper = renderer.create(<EditService service={service} categories={categories} chosenCategoryNames={chosenCategoryNames} props={props} componentDidMount={componentDidMount}/>);
		testinstance  = wrapper.root;
	});

	it('should render both <Container />', () => {
		expect(testinstance.findAllByType(Link)).toHaveLength(2);
	});
    
	it('should render both <Typography />', () => {
		expect(testinstance.findAllByType(Link)).toHaveLength(2);
	});    
    
	it('should render both <FormControl />', () => {
		expect(testinstance.findAllByType(Link)).toHaveLength(2);
	});
         
	it('should render both <Grid />', () => {
		expect(testinstance.findAllByType(Link)).toHaveLength(2);
	});
         
	it('should render both <TextField />', () => {
		expect(testinstance.findAllByType(Link)).toHaveLength(2);
	});
      
	it('should render both <InputLabel />', () => {
		expect(testinstance.findAllByType(Link)).toHaveLength(2);
	});
        
	it('should render both <Select />', () => {
		expect(testinstance.findAllByType(Link)).toHaveLength(2);
	});
         
	it('should render both <Button />', () => {
		expect(testinstance.findAllByType(Link)).toHaveLength(2);
	});
});