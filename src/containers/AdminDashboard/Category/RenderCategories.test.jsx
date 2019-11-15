import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Login from './Login';
import { TextField, Button, Grid, Link } from '@material-ui/core';
import RenderCategories from './RenderCategories';

describe('<RenderCategories />', () => {
	let wrapper;
	let testinstance;

    beforeEach(() => {
        wrapper = renderer.create(<RenderCategories />);
        testinstance  = wrapper.root;
    });



    it('should render a <Button />', () => {
		expect(testinstance.findAllByType(Button)).toHaveLength(1);
    });
    
    it('should render a <Grid />', () => {
		expect(testinstance.findAllByType(Grid)).toHaveLength(5);
    });
    
    it('should render a <List />', () => {
		expect(testinstance.findAllByType(Grid)).toHaveLength(1);
	});

}