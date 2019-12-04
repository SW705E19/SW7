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
	ListItemText
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {useTranslation} from 'react-i18next';
import {
	AccountCircle,
	Menu,
	Home,
	ViewComfy
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
				<ListItem button key="AccountCircle" name="account">
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
							<ViewComfy fontSize="large" name="services"/>
						</IconButton>
						<IconButton>
							<AccountCircle fontSize="large" name="account"/>
						</IconButton>
					</div>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
}

export default withStyles(styles)(Header);
