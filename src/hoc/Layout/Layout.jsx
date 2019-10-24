import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer/Footer';

function Layout(props) {
	return (
		<div id="page-container">
			<div>Toolbar</div>
			<div>Sidedrawer</div>
			<div>Backdrop</div>
			<main id="content-wrap">
				{props.children}
			</main>
			<Footer></Footer>
		</div>
	);
}

Layout.propTypes = {
	props: PropTypes.node,
	children: PropTypes.node,
};

export default Layout;
