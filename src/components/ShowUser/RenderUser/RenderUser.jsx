import React from 'react';
import { Card, Avatar, Grid, Typography, CardMedia, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
						Email
					</Typography>
					<Typography variant="caption" color="textSecondary">
						{props.user.email}
					</Typography>
					<Typography variant="subtitle1" color="textPrimary">
						Date of Birth
						</Typography>
					<Typography variant="caption" color="textSecondary">
						{props.user.dateOfBirth}
					</Typography>
					<Typography variant="subtitle1" color="textPrimary">
						Languages
						</Typography>
					<Typography variant="caption" color="textSecondary">
						{props.user.languages}
					</Typography>
					<Typography variant="subtitle1" color="textPrimary">
						Education
						</Typography>
					<Typography variant="caption" color="textSecondary">
						{props.user.education}
					</Typography>
					<Typography variant="subtitle1" color="textPrimary">
						Subjects
						</Typography>
					<Typography variant="caption" color="textSecondary">
						{props.user.subjects}
					</Typography>
					<Typography variant="subtitle1" color="textPrimary">
						Description
						</Typography>
					<Typography variant="caption" color="textSecondary">
						{props.user.description}
					</Typography>
				</CardContent>

				{ props.user.roles != null && props.user.roles.includes("TUTOR") ? <CardContent>
					<Typography component="h2" variant="h5">
						Tutor info
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
