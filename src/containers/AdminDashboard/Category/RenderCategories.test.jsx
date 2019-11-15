import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { TextField, Button, Grid} from '@material-ui/core';
import RenderCategories from './RenderCategories';


configure({adapter: new Adapter()});

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
    
	it('should render five <Grid />', () => {
		expect(testinstance.findAllByType(Grid)).toHaveLength(5);
	});
  
	it('should render two textfields <TextField />', () => {
		expect(testinstance.findAllByType(TextField)).toHaveLength(2);
	});

	it('Should change the state of name', () => {
		const handleOnChangeMock = jest.fn();
		const wrapper = shallow(<RenderCategories handleOnChange={handleOnChangeMock} />);
		wrapper.props().handleOnChange({name: 'category'});
		expect(handleOnChangeMock).toHaveBeenCalledTimes(1);
		expect(handleOnChangeMock).toHaveBeenCalledWith({name: 'category'});
	});

	it('Should change the state of description', () => {
		const handleOnChangeMock = jest.fn();
		const wrapper = shallow(<RenderCategories handleOnChange={handleOnChangeMock} />);
		wrapper.props().handleOnChange({description: 'category description'});
		expect(handleOnChangeMock).toHaveBeenCalledTimes(1);
		expect(handleOnChangeMock).toHaveBeenCalledWith({description: 'category description'});
	});
});

