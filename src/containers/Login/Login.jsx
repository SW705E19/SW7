import React from 'react';
import { Button, TextField, Link, Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

function Layout() {

	const useStyles = makeStyles(theme => ({
		'@global': {
			body: {
				backgroundColor: theme.palette.common.white,
			},
		},
		paper: {
			marginTop: theme.spacing(8),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		form: {
			width: '100%', // Fix IE 11 issue.
			marginTop: theme.spacing(1),
		},
		submit: {
			margin: theme.spacing(3, 0, 2),
		},
	}));

	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					{t('signin')}
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label={t('email')}
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label={t('password')}
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
					>
						{t('signin')}
					</Button>

					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								{t('forgotpassword?')}
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								{t('signup')}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}

export default Layout;