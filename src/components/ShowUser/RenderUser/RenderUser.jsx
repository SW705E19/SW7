import React from 'react';
import { Card, Avatar, Grid, Typography, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

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

	const random = 1 + (Math.random() * (200 - 1));
	const randomUrl = `https://api.adorable.io/avatars/140/${random}@adorable.png`;

	// TODO: This should be refactored once the user is correctly fetched from the API
	return (
		<>
			<Card className={classes.card}>
				<Grid container justify="center" alignItems="center">
					<Avatar src={randomUrl} className={classes.avatar} />
				</Grid>
				<CardContent>
					<Typography component="h2" variant="h5">
						{props.user.firstName} {props.user.lastName}
					</Typography>
					<Typography variant="subtitle1" color="textPrimary">
						{t('email')}
					</Typography>
					<Typography variant="caption" color="textSecondary">
						{props.user.email}
					</Typography>
					<Typography variant="subtitle1" color="textPrimary">
						{t('dateOfBirth')}
					</Typography>
					<Typography variant="caption" color="textSecondary">
						{props.user.dateOfBirth}
					</Typography>
					<Typography variant="subtitle1" color="textPrimary">
						{t('languages')}
					</Typography>
					<Typography variant="caption" color="textSecondary">
						{props.user.languages}
					</Typography>
					<Typography variant="subtitle1" color="textPrimary">
						{t('education')}
					</Typography>
					<Typography variant="caption" color="textSecondary">
						{props.user.education}
					</Typography>
					<Typography variant="subtitle1" color="textPrimary">
						{t('subjectofinterst')}
					</Typography>
					<Typography variant="caption" color="textSecondary">
						{props.user.subjects}
					</Typography>
					<Typography variant="subtitle1" color="textPrimary">
						{t('description')}
					</Typography>
					<Typography variant="caption" color="textSecondary">
						{props.user.description}
					</Typography>
				</CardContent>

				{ props.user.roles != null && props.user.roles.includes('TUTOR') ? <CardContent>
					<Typography component="h2" variant="h5">
						{t('tutorInfo')}
					</Typography>
					<Typography variant="subtitle1" color="textPrimary">
						{props.user.tutorInfo.description}
					</Typography>
				</CardContent> : null }
			</Card>
		</>
	);
}
export default RenderUser;
