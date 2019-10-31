import React from 'react';
import Login from '../../containers/Login/Login';
import Header from '../../components/Header/Header';

function Layout() {
	return (
		<>
			<Header />
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
