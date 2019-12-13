import React from 'react';
import { Button, Card, CardActions, Avatar, Grid, Typography, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import PaymentIcon from 'react-payment-icons';
import { Link } from 'react-router-dom';
import { authenticationService } from '../../../services/authentication/authentication.service';

function RenderUser(props) {
	const useStyles = makeStyles(theme => ({
		root: {
			padding: theme.spacing(3, 2),
		},
		media: {
			height: 140,
		},
		avatar: {
			height: 140,
			width: 140
		}
	}));

	const { t } = useTranslation();
	const classes = useStyles();

	const randomUrl = `https://api.adorable.io/avatars/140/${props.user.id}@adorable.png`;

	// TODO: This should be refactored once the user is correctly fetched from the API
	return (
		
		<Card className={classes.card}>
			<Grid container justify="center" alignItems="center">
				<Avatar src={randomUrl} className={classes.avatar} />
			</Grid>
			<CardContent>
				{(props.user.firstName && props.user.lastName) ? (
					<Typography component="h2" variant="h5">
						{props.user.firstName} {props.user.lastName}
					</Typography>
				) : t('unavailable')}
				{props.user.email != null ? (
					<Typography variant="body2" component="p">
						{t('email')}: {props.user.email}
					</Typography>
				) : null}
				{props.user.dateOfBirth != null ? (
					<Typography variant="body2" component="p">
						{t('dateOfBirth')}: {new Date(props.user.dateOfBirth).toLocaleDateString()}
					</Typography>
				) : null}
				{props.user.languages != null ? (
					<Typography variant="body2" component="p">
						{t('languages')}: {props.user.languages}
					</Typography>
				) : null}
				{props.user.education != null ? (
					<Typography variant="body2" component="p">
						{t('education')}: {props.user.education}
					</Typography>
				) : null}
				{props.user.subjectsOfInterest != null ? (
					<Typography variant="body2" component="p">
						{t('subjectofinterest')}: {props.user.subjectsOfInterest.map(interest => interest ).join(', ')}
					</Typography>
				) : null}
			</CardContent>

			{props.user.tutorInfo != null ?
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<Typography component="h2" variant="h5">
								{t('infoabouttutor')}
							</Typography>
							<Typography variant="subtitle1" color="textPrimary">
								{props.user.tutorInfo.description != null ? props.user.tutorInfo.description : t('unavailable')}
							</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography component="h2" variant="h5">
								{t('acceptedpayments')}
							</Typography>
							<Typography variant="subtitle1" color="textPrimary">
								{
									props.user.tutorInfo.acceptedPayments.map((x, i) => {
										return <PaymentIcon
											id={x.toLowerCase()}
											style={{ margin: 10, width: 50 }}
											className="payment-icon"
											key={i}
										/>;
									})
								}
							</Typography>
						</Grid>
						{props.user.id === authenticationService.getCurrentUserId() ?
							<>
								<Grid item xs={6}>
									<Button
										component={Link}
										to={`/user/edit/${props.user.id}`}
										type="button"
										variant="contained"
										color="primary"
										fullWidth
									>
										{t('edituser')}
									</Button>
								</Grid>
								<Grid item xs={6}>
									<Button
										component={Link}
										to={'/service/create'}
										type="button"
										variant="contained"
										color="primary"
										fullWidth
									>
										{t('createaservice')}
									</Button>
								</Grid>
							</>
							: null
						}
						<Grid item >
							<Typography component="h2" variant="h5">
								{t('services')}
							</Typography>
						</Grid>
						<Grid container spacing={2}>
							{
								props.user.tutorInfo.services.map((x, i) => {
									return <Grid item xs={12} md={3} key={i}>
										<Card className={classes.card}>
											<CardContent>
												<Typography className={classes.title} color="textSecondary" gutterBottom>
													{x.name}
												</Typography>
												<Typography variant="h5" component="h2">

												</Typography>
												<Typography variant="body2" component="p">
													{x.description.substring(0, 30)}
												</Typography>
											</CardContent>
											<CardActions>
												<Button component={Link} to={`/service/${x.id}`}>{t('learnmore')}</Button>
											</CardActions>
										</Card>
									</Grid>;
								})
							}
						</Grid>
					</Grid>
				</CardContent> : null
			}
		</Card>
	);
}
export default RenderUser;
