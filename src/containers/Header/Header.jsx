import  React from 'react';
import { AppBar, Toolbar, IconButton, Hidden, Button, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { AccountCircle, Menu, Notifications, Home, Event, Mail} from '@material-ui/icons';
import Drawer from '@material-ui/core/Drawer';
import logo_transparent from '../../assets/logo_transparent.png'; 

const styles = {
	toolbarButtons: {
		marginLeft: 'auto'
	}
};


function Header({classes}) {
	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer = (open) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
		  return;
		}
	
		setState({ ...state, 'left': open });
	};

	const sideList =
		<div
		  className={classes.list}
		  role="presentation"
		  onClick={toggleDrawer(false)}
		  onKeyDown={toggleDrawer(false)}
		>
		  <List>
		  <ListItem button key = 'Home'>
				<ListItemText primary='Home' />
				<ListItemIcon>
					<Home fontSize="large" />
				</ListItemIcon>
			</ListItem>

			<ListItem button key = 'Mail'>
				<ListItemText primary='Inbox' />
				<ListItemIcon>
					<Mail fontSize="large" />
				</ListItemIcon>
			</ListItem>

			<ListItem button key = 'Event'>
				<ListItemText primary='Calendar' />
				<ListItemIcon>
					<Event fontSize="large" />
				</ListItemIcon>
			</ListItem>

			<ListItem button key = 'Notifications'>
				<ListItemText primary='Notifications' />
				<ListItemIcon>
					<Notifications fontSize="large" />
				</ListItemIcon>
			</ListItem>
			
			<ListItem button key = 'AccountCircle'>
				<ListItemText primary='My account' />
				<ListItemIcon>
					<AccountCircle fontSize="large" />
				</ListItemIcon>
			</ListItem>
		  </List>
		</div>;
	

	
	return (
		<AppBar position="static">
			<Toolbar>
				<Hidden mdUp>
					<Button onClick={toggleDrawer(true)}><Menu/></Button>
					<Drawer open={state.left} onClose={toggleDrawer(false)}>
   			     	   {sideList}
  			 	    </Drawer> 
				</Hidden>
				<Hidden smDown>
					<Typography>
						<img  src={logo_transparent} alt="fireSpot" height="80" width="80"/>
					</Typography>

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
