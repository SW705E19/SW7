import  React from 'react';
import { AppBar, Toolbar, IconButton, Hidden, Button, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { AccountCircle, Menu, Notifications, Home, Event, Mail} from '@material-ui/icons';
import Drawer from '@material-ui/core/Drawer';


const styles = {
	toolbarButtons: {
		marginLeft: 'auto'
	}
};


function Header({classes}) {
	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer = (side, open) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
		  return;
		}
	
		setState({ ...state, [side]: open });
	};

	const sideList = side => (
		<div
		  className={classes.list}
		  role="presentation"
		  onClick={toggleDrawer(side, false)}
		  onKeyDown={toggleDrawer(side, false)}
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
		</div>
	  );
	

	
	return (
		<AppBar position="static" >
			<Toolbar>
				<Hidden mdUp>
					<Button onClick={toggleDrawer('left', true)}><Menu/></Button>
					<Drawer open={state.left} onClose={toggleDrawer('left', false)}>
   			     	   {sideList('left')}
  			 	    </Drawer> 
				</Hidden>
				<Hidden smDown>
					<IconButton className={classes.menuButton}>
						<Home fontSize="large" />
					</IconButton>

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
