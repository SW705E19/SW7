import React from 'react';
import RenderCategories from './Category/RenderCategories';
import {categoryService} from '../../services/category/category.service';


class AdminDashboard extends React.Component {
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
