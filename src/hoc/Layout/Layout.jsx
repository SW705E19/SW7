import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer/Footer';

function Layout(props) {
	return (
		<>
			<div>Toolbar</div>
			<div>Sidedrawer</div>
			<div>Backdrop</div>
			<main>
				{props.children}
			</main>
			<Footer></Footer>
		</>
	);
}

Layout.propTypes = {
	props: PropTypes.node,
	children: PropTypes.node,
};

export default Layout;
