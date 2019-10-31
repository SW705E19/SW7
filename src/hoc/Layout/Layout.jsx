import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';



function Layout(props) {
	return (
		<>
			<Header></Header>
			<div>Sidedrawer</div>
			<div>Backdrop</div>
			<main>
				{props.children}
			</main>
			<div>Footer</div>
		</>
	);
}

Layout.propTypes = {
	props: PropTypes.node,
	children: PropTypes.node,
};

export default Layout;
