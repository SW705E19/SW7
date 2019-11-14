import React from 'react';
import { Button, TextField, Link, Grid, Typography } from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
import { useTranslation, withTranslation } from 'react-i18next';
import { authenticationService } from '../../services/authentication/authentication.service';
import { withStyles } from "@material-ui/core/styles";

 const styles = theme => ({
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
});


class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: ""
		};

		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
	}

	handleUsernameChange(event) {
		this.setState({ username: event.target.value });
	}

	handlePasswordChange(event) {
		this.setState({ password: event.target.value });
	}

	render() {
		const { classes, t } = this.props;


		return (
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
							type="email"
							id="email"
							onChange={this.handleUsernameChange}
							value={this.state.username}
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
							onChange={this.handlePasswordChange}
							value={this.state.password}
							autoComplete="current-password"
						/>
						<Button
							type="button"
							fullWidth
							variant="contained"
							color="primary"
							className = "login-button"
							id = "login"
							onClick={() => authenticationService.login(this.state.username, this.state.password)}
						>
							{t('signin')} 
						</Button>

						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									{ t('forgotpassword?') }
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{ t('signup') }
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
		);
	}
}

export default withTranslation()(withStyles(styles)(Login));