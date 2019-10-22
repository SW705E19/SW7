import React from 'react';
import { Card, Typography, CardMedia, CardActionArea, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// TODO: Add API call when we can fetch a real user
/* Props must contain a user: User
    const User = {
        fullName: "Lars Larsen",
        email: "email@email.com",
        dateOfBirth: "September 30, 1995",
        languages: ["Danish", "English"],
        education: "Bla bla bla...",
        subjects: ["Gaming", "Programming", "Running"],
        description: "We don't make mistakes we just have happy little accidents. We have all at one time or another mixed some mud. Only God can make a tree - but you can paint one. Let's get crazy. That is when you can experience true joy, when you have no fear. Little short strokes.",
        avatarURL: "https://source.unsplash.com/random",
    };
*/
function ShowUser(props) {
	const useStyles = makeStyles(theme => ({
		root: {
			padding: theme.spacing(3, 2),
		},
		card: {
			maxWidth: 345,
		},
		media: {
			height: 140,
		},
	}));

	const classes = useStyles();

	return (
		<>
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image='https://source.unsplash.com/random'
						title={props.user.fullName}
					/>
					<CardContent>
						<Typography component="h2" variant="h5">
							{props.user.fullName}
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
				</CardActionArea>
			</Card>
		</>
	);
}

export default ShowUser;
