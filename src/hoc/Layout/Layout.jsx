import React from 'react';
import PropTypes from 'prop-types';

function Layout(props) {
	return (
		<>
			<div>Toolbar</div>
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
