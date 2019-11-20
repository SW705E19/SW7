import React from 'react';
import renderer from 'react-test-renderer';
import RenderCategories from './Category/RenderCategories';
import AdminDashboard from './AdminDashboard';

describe('<AdminDashboard />', () => {
	let wrapper;
	let testinstance;
    
	beforeEach(() => {
		wrapper = renderer.create(<AdminDashboard />);
		testinstance  = wrapper.root;
	});
    
	it('should render a <RenderCategories />', () => {
		expect(testinstance.findAllByType(RenderCategories)).toHaveLength(1);
	});
});