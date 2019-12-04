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
					<>
						<Typography variant="subtitle1" color="textPrimary">
							{t('email')}
						</Typography>
						<Typography variant="caption" color="textSecondary">
							{props.user.email}
						</Typography>
					</>
				) : null }
				{props.user.dateOfBirth != null ? (
					<>
						<Typography variant="subtitle1" color="textPrimary">
							{t('dateOfBirth')}
						</Typography>
						<Typography variant="caption" color="textSecondary">
							{props.user.dateOfBirth}
						</Typography>
					</>
				) : null }
				{props.user.languages != null ? (
					<>
						<Typography variant="subtitle1" color="textPrimary">
							{t('languages')}
						</Typography>
						<Typography variant="caption" color="textSecondary">
							{props.user.languages}
						</Typography>
					</>
				) : null }
				{props.user.education != null ? (
					<>
						<Typography variant="subtitle1" color="textPrimary">
							{t('education')}
						</Typography>
						<Typography variant="caption" color="textSecondary">
							{props.user.education}
						</Typography>
					</>
				) : null }
				{props.user.subjectsOfInterest != null ? (
					<>
						<Typography variant="subtitle1" color="textPrimary">
							{t('subjectofinterest')}
						</Typography>
						<Typography variant="caption" color="textSecondary">
							{props.user.subjectsOfInterest}
						</Typography>
					</>
				) : null }
			</CardContent>

			{ props.user.tutorInfo != null ?
				<CardContent>
					<Typography component="h2" variant="h5">
						{t('infoabouttutor')}
					</Typography>
					<Typography variant="subtitle1" color="textPrimary">
						{props.user.tutorInfo.description != null ? props.user.tutorInfo.description : t('unavailable')}
					</Typography>
				</CardContent> : null 
			}

		</Card>
	);
}
export default RenderUser;
