import React from 'react';
import { Card, Avatar, Grid, Typography, CardContent } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

function RenderService(props) {
	const useStyles = makeStyles(theme => ({
		root: {
			padding: theme.spacing(3, 2),
			flexGrow: 1,
			width: 700
		},
		media: {
			height: 140
		},
		avatar: {
			height: 140,
			width: 140,
		},
		item: {
			padding: theme.spacing(2),
			textAlign: 'center'
		}
	}));

	const { t } = useTranslation();
	const classes = useStyles();
	return (
		<>
			<Grid container justify="center" alignItems="center">
				<Avatar className={classes.avatar} />
			</Grid>
			<Grid container className={classes.root} spacing={3}>
				<Grid className = {classes.item} item xs={6} justify="center">
					<Card className={classes.card}>
						<CardContent>
							<Grid container justify="center" alignItems="center">
							<Avatar className={classes.avatar} />
							</Grid>
							<Typography component="h2" variant="h5">
								{"Tutor name"}
								<Typography variant="subtitle1" color="textPrimary">
									{"Tutor description"}
								</Typography>
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid className = {classes.item} item xs={6} justify="center">
					<Card className={classes.card}>
						<CardContent>
							<Typography component="h2" variant="h5">
								{"service nmae"}
								<Typography variant="subtitle1" color="textPrimary">
									{'service description'}
								</Typography>
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	);
}
export default RenderService;
