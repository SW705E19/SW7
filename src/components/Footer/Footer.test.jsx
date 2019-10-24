import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './Footer';

describe('Footer test', () => {
	test('test if footer is rendered', () => {
		const component =  renderer.create(<Footer></Footer>).toJSON();
		
		expect(component).toMatchSnapshot();
	});
});
