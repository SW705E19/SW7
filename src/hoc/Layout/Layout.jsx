import React from 'react';
import Login from '../../containers/Login/Login';

function Layout() {
	return (
		<>
			<div>Toolbar</div>
			<div>Sidedrawer</div>
			<div>Backdrop</div>
			<main>
				<Login />
			</main>
			<div>Footer</div>
		</>
	);
}

export default Layout;
