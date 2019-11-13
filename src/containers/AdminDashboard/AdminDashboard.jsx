import React from 'react';
import RenderCategories from './Category/RenderCategories';


class AdminDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: []
		};
	}

	componentDidMount() {
		fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/categories/`)
			.then(res => res.json())
			.then((data) => {
				this.setState({ categories: data });
			})
			.catch(console.log);
	}

	render() {
		return (
			<>
				<RenderCategories categories={this.state.categories} ></RenderCategories>
			</>
		);
	}
}



export default AdminDashboard;
