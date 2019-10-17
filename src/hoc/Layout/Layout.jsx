import React from 'react';
import Aux from '../Aux/Aux';
import PropTypes from 'prop-types';

function Layout(props) {
	return (
		<Aux>
			<div>Toolbar</div>
			<div>Sidedrawer</div>
			<div>Backdrop</div>
			<main>
				{props.children}
			</main>
			<div>Footer</div>
		</Aux>
	);
}

Layout.PropTypes = {
	props: PropTypes.node,
	children: PropTypes.node,
};

export default Layout;
