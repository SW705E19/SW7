/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { Card, Avatar, Grid, Typography, CardContent, Button, CardActions, CardMedia, Box, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Rating from '@material-ui/lab/Rating';
import { authenticationService } from '../../../services/authentication/authentication.service';


function RenderService(props) {
	const useStyles = makeStyles(theme => ({
		root: {
			padding: theme.spacing(3, 2),
		},
		media: {
			height: 0,
			paddingTop: '56.25%',
		},
		servicepicture: {
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

	const randomUrl = 'https://source.unsplash.com/random/800x600';

	// Bruges til rating stjernerne. ratingValue is currentValue, setRating updates.
	const [ratingValue, setRatingValue] = React.useState(0);

	if(props.service.tutorInfo.userId !== authenticationService.getCurrentUserId()) {
		return (
			<>
				<Grid container className={classes.root} spacing={2}>
					<Grid className={classes.item} item md={12}>
						<Card justify="center" className={classes.card}>
							<CardMedia className={classes.media}
								image={randomUrl}>
							</CardMedia>
						</Card>
					</Grid>
					<Grid className={classes.item} item md={12}>
						<Card justify="center">
							<Typography color="textPrimary" style={{ fontSize: 12 }}>
								{t('averagerating')}: {props.avgRating.avg.substring(0, 4)}
							</Typography>
							<Rating
								name="rating-value"
								value={ratingValue}
								onChange={(event, newValue) => {
									setRatingValue(newValue);
								}}
							/>
	
							<CardActions style={{ justifyContent: 'center' }}>
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
	
					<Grid className={classes.item} item md={6}>
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
					<Grid className={classes.item} item md={6}>
						<Card className={classes.card}>
							<CardContent>
								<Typography component="h2" variant="h5">
									{props.service.name}
									<Divider orientation="horizontal" />
									<Box fontStyle="italic" >
										<Typography color="textPrimary" style={{ fontSize: 12 }}>
											{'Categories: ' + props.service.categories.map((category, index) => category.name + (index ? '.' : ', ')).join('')}
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

	return (
		<Grid container className={classes.root} spacing={2}>
			<Grid className={classes.item} item md={12}>
				<Typography 
					align="center"
					variant="h2"
				>
					{props.service.name}
				</Typography>
			</Grid>
			<Grid className={classes.item} item md={12}>
				<Card justify="center" className={classes.card}>
					<CardMedia className={classes.media}
						image={randomUrl}>
					</CardMedia>
				</Card>
			</Grid>
			<Grid className={classes.item} item md={12}>
				<Card className={classes.card}>
					<CardContent>
						<Typography color="textPrimary" style={{ fontSize: 12 }}>
							{t('averagerating')}: {props.avgRating.avg.substring(0, 4)}
						</Typography>
						<Typography component="h2" variant="h5">
							{props.service.name}
							<Divider orientation="horizontal" />
							<Box fontStyle="italic" >
								<Typography color="textPrimary" style={{ fontSize: 12 }}>
									{'Categories: ' + props.service.categories.map((category, index) => category.name + (index ? '.' : ', ')).join('')}
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
						<Grid container className={classes.root} spacing={1}>
							<Grid className={classes.item} item md={12}>
								<Button
									component={Link}
									to={`/service/edit/${props.service.id}`}
									type="button"
									variant="contained"
									color="primary"
									fullWidth
								>
									{t('editservice')}
								</Button>
							</Grid>
						</Grid>
					</CardActions>
				</Card>
			</Grid>
		</Grid>
	);
	
}
export default RenderService;
