import React, { Component } from 'react';
import { Container, Button, TextField, Link, Grid, Typography} from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { authenticationService } from '../../services/authentication/authentication.service';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	}
});


class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			redirect: false
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
		let toastFailId = null;

		const notifysuccess = () => toast.success(t('loginnotifysucc'), {
			position: toast.POSITION.BOTTOM_RIGHT
		});

		const notifyfailure = () => {
			if(!toast.isActive(toastFailId)) {
				toastFailId = toast.error(t('loginnotifyfail'), {
					position: toast.POSITION.BOTTOM_RIGHT
				});
			}
		};

		//TODO: Add redirect to all services
		const handleOnClick = () => {
			authenticationService.login(this.state.username, this.state.password)
				.catch((res) => {
					if(res === 'Unauthorized' || res === 'Bad Request'){
						notifyfailure();
					}
				})
				.then (() => {
					if (localStorage.length !== 0 ) {
						notifysuccess();
						this.props.changeLoggedInState();
						this.setState({redirect: true});
					}
				});
		};

		const handleEnterPress = (event) => {
			var code = event.keyCode ||event.which;
			if (code === 13) {
				handleOnClick();
			}	
		};

		if(this.state.redirect){
			return <Redirect to={'/'}/>;
		}

		return (
			<Container maxWidth="sm">
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
							onChange={this.handleUsernameChange}
							value={this.state.username}
							autoFocus
							onKeyPress={handleEnterPress.bind(this)}
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
							onKeyPress={handleEnterPress.bind(this)}
						/>
						<Button
							type="button"
							fullWidth
							variant="contained"
							color="primary"
							className="login-button"
							id="login"
							onClick={handleOnClick}
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
								<Link href="/register" variant="body2">
									{t('signup')}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		);
	}
}

export default withTranslation()(withStyles(styles)(Login));
