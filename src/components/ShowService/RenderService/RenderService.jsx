import React from 'react';
import { Card, Avatar, Grid, Typography, CardContent, Button, CardActions, CardMedia, Box, Divider} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Rating from '@material-ui/lab/Rating';

function RenderService(props) {
	const useStyles = makeStyles(theme => ({
		root: {
			padding: theme.spacing(3, 2),
		},
		media: {
			height: 0,
			paddingTop: '56.25%',
		},
		servicepicture:  {
			height: 350,
			width: 350,
		},
		avatar: {
			height: 140,
			width: 140,
		},
		item: {
			textAlign: 'center',
			width: '100%'
		},
		card: {
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between'
		},
	}));

	const { t } = useTranslation();
	const classes = useStyles();

	const random = 1 + (Math.random() * (200 - 1));
	const randomUrl = `https://api.adorable.io/avatars/140/${random}@adorable.png`;

	// Bruges til rating stjernerne. ratingValue is currentValue, setRating updates.
	const [ratingValue, setRatingValue] = React.useState(0);

	return (
		<>
			<Grid container className={classes.root} spacing={2}>
				<Grid className = {classes.item} item md={12}>
					<Card justify="center"  className={classes.card}>
						<CardMedia className={classes.media}
							image={randomUrl}>					
						</CardMedia>
					</Card>
				</Grid>
				<Grid className = {classes.item} item md={12}>
					<Card className={classes.card}>
						<Rating
          					name="rating-value"
          					value={ratingValue}
          					onChange={(event, newValue) => {
            				setRatingValue(newValue);
          				}}
       					 />
						<CardActions>
							<Button 
								type="button"
								variant="contained"
								color="primary"
								size="small"
								onClick={() => props.submitRating(ratingValue)}
							>
								{t('submitrating')}
							</Button>
						</CardActions>	
					</Card>
				</Grid>

				<Grid className = {classes.item} item md={6}>
					<Card className={classes.card}>
						<CardContent>
							<Typography component="h2" variant="h5">
								{props.service.tutorInfo.user.firstName} {props.service.tutorInfo.user.lastName}
								<Divider orientation="horizontal" />
								<Box m={0.5} />
								<Grid container justify="center" alignItems="center">
									<Avatar className={classes.avatar} />
								</Grid>
							</Typography>
							<Typography color="textPrimary">
								{props.service.tutorInfo.description}
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								type="button"
								variant="contained"
								color="primary"
								fullWidth
								onClick={() => props.setRedirect()}
							>
								{t('gototutorpage')}
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid className = {classes.item} item md={6}>
					<Card className={classes.card}>
						<CardContent>
							<Typography component="h2" variant="h5">
								{props.service.name}
								<Divider orientation="horizontal" />
								<Box fontStyle="italic" >
									<Typography color="textPrimary" style={{fontSize: 12}}>
										{'Categories: ' + props.service.categories.map((category, index) =>  category.name + (index ? '.' : ', ')).join('')}
									</Typography>
								</Box>
								<Divider orientation="horizontal" />
								<Box m={0.5} />
								<Typography color="textPrimary">
									{props.service.description}
								</Typography>
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								type="button"
								variant="contained"
								color="primary"
								fullWidth
							>
								{t('contacttutor')}
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</>
	);
}
export default RenderService;
