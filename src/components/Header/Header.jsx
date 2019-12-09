import React from 'react';
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
	ListItemText
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {useTranslation} from 'react-i18next';
import {
	AccountCircle,
	Menu,
	Notifications,
	Home,
	Event,
	Mail
} from '@material-ui/icons';
import Drawer from '@material-ui/core/Drawer';
import logo_transparent from '../../assets/logo.png';

const styles = {
	toolbarButtons: {
		marginLeft: 'auto'
	}
};

function Header(props) {
	const classes = props.classes;
	const { t } = useTranslation();

	const [state, setState] = React.useState({
		isMenuOpen: false
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

	const sideList = (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				<ListItem button key="Home">
					<ListItemText primary="Home" />
					<ListItemIcon>
						<Home fontSize="large" />
					</ListItemIcon>
				</ListItem>

				<ListItem button key="Mail">
					<ListItemText primary="Inbox" />
					<ListItemIcon>
						<Mail fontSize="large" />
					</ListItemIcon>
				</ListItem>

				<ListItem button key="Event">
					<ListItemText primary="Calendar" />
					<ListItemIcon>
						<Event fontSize="large" />
					</ListItemIcon>
				</ListItem>

				<ListItem button key="Notifications">
					<ListItemText primary="Notifications" />
					<ListItemIcon>
						<Notifications fontSize="large" />
					</ListItemIcon>
				</ListItem>

				<ListItem button key="AccountCircle">
					<ListItemText primary="My account" />
					<ListItemIcon>
						<AccountCircle fontSize="large" />
					</ListItemIcon>
				</ListItem>
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
					<IconButton>
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
						<IconButton>
							<Mail fontSize="large" />
						</IconButton>
						<IconButton>
							<Event fontSize="large" />
						</IconButton>
						<IconButton>
							<Notifications fontSize="large" />
						</IconButton>
						<IconButton>
							<AccountCircle fontSize="large" />
						</IconButton>
					</div>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
}

export default withStyles(styles)(Header);
