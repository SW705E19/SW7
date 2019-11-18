import React from 'react';
import {Grid, Card, CardHeader} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
	root: {

	},
	paper: {
		padding: theme.spacing(2)
	}
}));

function ServiceList(props) {
	const columnWidth = 12/props.servicesPerLine;
	const classes = useStyles();
	return (
		<> 
			<Grid container spacing={3}>
				{
					props.services.map( (service, i) => {
						return <Grid item xs={12} sm={columnWidth} key={i}> 
							<Card>
								<CardHeader 
									title={service.name}
									//subtitle={service.tutor.name}
								/>
							</Card>
						</Grid>;
					})
				}
			</Grid>
		</>
	);
}

export default ServiceList;
