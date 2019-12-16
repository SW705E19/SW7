import React from 'react';
import { Link } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	IconButton,
	Hidden,
	Button,
	List,
	ListItem,
	ListItemIcon,
	Select,
	MenuItem,
	ListItemText,
	Dialog,
	DialogTitle,
	DialogActions
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import {
	AccountCircle,
	Menu,
	Home,
	ViewComfy,
	ExitToApp,
	MeetingRoom,
	SupervisorAccount
} from '@material-ui/icons';
import Drawer from '@material-ui/core/Drawer';
import logo_transparent from '../../assets/logo.png';
import { authenticationService } from '../../services/authentication/authentication.service';
import { toast } from 'react-toastify';

const styles = {
	toolbarButtons: {
		marginLeft: 'auto'
	}
};

function Header(props) {
	const classes = props.classes;
	const { t } = useTranslation();

	const logout = () => {
		authenticationService.logout();
		toast.success(t('logoutsuccess'), {
			position: toast.POSITION.BOTTOM_RIGHT
		});
		props.changeLoggedInState();
		setState({openAlert: false});
	};

	const [state, setState] = React.useState({
		isMenuOpen: false,
		openAlert: false
	});

	const toggleDrawer = open => event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, isMenuOpen: open });
	};

	const handleClickOpen = () => {
		setState({ openAlert: true });
	};

	const handleClickClose = () => {
		setState({ openAlert: false });
	};
	


	const sideList = (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				<ListItem button component={Link} to="/" key="Home" name="home">
					<ListItemText primary="Home" />
					<ListItemIcon>
						<Home fontSize="large" />
					</ListItemIcon>
				</ListItem>

				<ListItem button component={Link} to="/service" key="Services" name="services">
					<ListItemText primary="Services" />
					<ListItemIcon>
						<ViewComfy fontSize="large" />
					</ListItemIcon>
				</ListItem>
				{
					props.loggedIn ?
						<>
							<ListItem button component={Link} to="/account" key="AccountCircle" name="account">
								<ListItemText primary="My account" />
								<ListItemIcon>
									<AccountCircle fontSize="large" />
								</ListItemIcon>
							</ListItem>
							{
								authenticationService.getUserRoles().includes('ADMIN') ?
									<ListItem button component={Link} to="/admin" key="SupervisorAccount">
										<ListItemText primary="Admin" />
										<ListItemIcon>
											<SupervisorAccount fontSize="large" />
										</ListItemIcon>
									</ListItem>
									: null
							}
							<ListItem button component={Link} to="/" key="MeetingRoom" onClick={logout}>
								<ListItemText primary="Logout" />
								<ListItemIcon>
									<MeetingRoom fontSize="large" />
								</ListItemIcon>
							</ListItem>
						</>
						:
						<ListItem button component={Link} to="/login" key="LoginCircle" name="login">
							<ListItemText primary="Login" />
							<ListItemIcon>
								<ExitToApp fontSize="large" />
							</ListItemIcon>
						</ListItem>
				}
			</List>
		</div>
	);
	return (
		<AppBar position="sticky">
			<Toolbar>
				<Hidden mdUp>
					<Button onClick={toggleDrawer(true)}>
						<Menu />
					</Button>
					<Drawer open={state.isMenuOpen} onClose={toggleDrawer(false)}>
						{sideList}
					</Drawer>
				</Hidden>
				<Hidden smDown>
					<IconButton component={Link} to="/">
						<img src={logo_transparent} alt="" height="45" width="45" />
					</IconButton>

					<Select
						onChange={props.changeLanguage}
						value="default"
					>
						<MenuItem value="default" disabled>
							{t('languages')}
						</MenuItem>
						<MenuItem value={'en'}>{t('english')}</MenuItem>
						<MenuItem value={'da'}>{t('danish')}</MenuItem>
					</Select>
					<div className={classes.toolbarButtons}>
						<IconButton component={Link} to="/service">
							<ViewComfy fontSize="large" name="services" />
						</IconButton>
						{
							props.loggedIn ?
								<>
									<IconButton component={Link} to="/account">
										<AccountCircle fontSize="large" name="account" />
									</IconButton>
									{
										authenticationService.getUserRoles().includes('ADMIN') ?	
											<IconButton component={Link} to="/admin" >
												<SupervisorAccount fontSize="large" name="admin" />
											</IconButton>						
											: null
									}
									<IconButton onClick={handleClickOpen}>
										<MeetingRoom fontSize="large" name="logout" />
									</IconButton>
									<Dialog
										open={state.openAlert}
										onClose={handleClickClose}
										aria-labelledby="alert-dialog-title"
										aria-describedby="alert-dialog-description"
									>
										<DialogTitle id="alert-dialog-title">{t('logoutconfirmation')}</DialogTitle>
										<DialogActions>
											<Button onClick={handleClickClose} color="primary" variant="contained">
												{t('cancel')}
											</Button>
											<Button onClick={logout}  component={Link} to="/" color="secondary" autoFocus variant="contained">
												{t('logout')}
											</Button>
										</DialogActions>
									</Dialog>
								</>
								:
								<IconButton component={Link} to="/login">
									<ExitToApp fontSize="large" name="login" />
								</IconButton>
						}
					</div>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
}

export default withStyles(styles)(Header);
