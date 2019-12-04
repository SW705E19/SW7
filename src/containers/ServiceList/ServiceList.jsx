import React from 'react';
import {Grid, Card, CardContent, CardMedia, Typography, withStyles} from '@material-ui/core';

const styles = {
	root: {
		width: '100%',
	},
	card: {
		height: '20em',
		cursor:'pointer'
	},
	CardContent: {
		height: '20%',
	},
	media: {
		height: '70%',
		objectFit: 'fill'
	}
};

function ServiceList(props) {
	const classes = props.classes;
	const columnWidth = 12/props.servicesPerLine;
	return (
		<> 
			<Grid container spacing={3} className={classes.root}>
				{	
					props.services ? 
						props.services.map( (service, i) => {
							return <Grid item xs={12} sm={columnWidth} key={i}> 
								<Card
									className={classes.card}
									onClick={() => props.onClick(service.id)}
								>
									<CardMedia 
										className={classes.media}
										component='img'
										image='https://picsum.photos/id/840/200/500'
									/>
									<CardContent
										className={classes.cardContent} 
									>
										<Typography gutterBottom variant='h5' component='h2'>
											{service.name}
										</Typography>
										<Typography
											variant="body2"
											component="p"
										>
											{service.tutorInfo.user.firstName + ' ' + service.tutorInfo.user.lastName}
										</Typography>
									</CardContent>

								</Card>
							</Grid>;
						}):
						null
				}
			</Grid>
		</>
	);
}

export default withStyles(styles)(ServiceList);
