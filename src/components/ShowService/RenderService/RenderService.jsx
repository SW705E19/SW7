import React from 'react';
import { Card, Avatar, Grid, Typography, CardContent, Button, CardActions, CardMedia} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

//change to RenderService(props) when getting data from backend
function RenderService() {
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
			
		}
	}));

	const { t } = useTranslation();
	const classes = useStyles();
	return (
		<>
			<Typography component="h2" variant="h5" className={classes.item}>
				{'The Service Name'}
			</Typography>
			<Grid container className={classes.root} spacing={3}>
				<Grid className = {classes.item} item md={12}>
					<Card justify="center" alignItems="center" className={classes.card}>
						<CardMedia className={classes.media}
							image="">
					
						</CardMedia>
					</Card>
				</Grid>
			
				<Grid className = {classes.item} item md={6}>
					<Card className={classes.card}>
						<CardContent>
							<Typography component="h2" variant="h5">
								{'Tutor Name'}
								<Grid container justify="center" alignItems="center">
									<Avatar className={classes.avatar} />
								</Grid>
							</Typography>
							<Typography variant="subtitle1" color="textPrimary">
								{'Tutor Description'}
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								type="button"
								variant="contained"
								color="primary"
								fullWidth
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
								{'Service Name'}
								<Typography variant="subtitle1" color="textPrimary">
									{'Service Description'}
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
