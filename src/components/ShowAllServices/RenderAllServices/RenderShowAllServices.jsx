import React from 'react';
import ServiceList from '../../../containers/ServiceList/ServiceList';

function RenderShowAllServices(props) {
	return (
		<>
			<ServiceList 
				services={props.services}
				servicesPerLine={4}
				onClick={props.onClick}
			/>
		</>
	);
}

export default RenderShowAllServices;
