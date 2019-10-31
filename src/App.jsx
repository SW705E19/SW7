import React, { Suspense } from 'react';
import './i18n';
import Layout from './hoc/Layout/Layout';

function App() {
	return (
		<div>
			<Suspense fallback={null}>
				<Layout>
					<p>Test</p>
				</Layout>
			</Suspense>
		</div>
	);
}

export default App;
