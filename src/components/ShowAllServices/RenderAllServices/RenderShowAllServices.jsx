import React from 'react';
import ServiceList from '../../../containers/ServiceList/ServiceList';

function RenderShowAllServices(props) {
	return (
		<>
			<ServiceList 
				services={props.services}
				servicesPerLine={4}
			/>
		</>
	);
}

export default RenderShowAllServices;
