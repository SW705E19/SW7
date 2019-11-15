import React, { Component } from 'react';
import RenderCategories from './Category/RenderCategories';

class AdminDashboard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<>
				<RenderCategories ></RenderCategories>
			</>
		);
	}
}



export default AdminDashboard;
