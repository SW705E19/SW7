import  React from 'react';
import { AppBar, Toolbar, IconButton, Hidden} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { AccountCircle , Notifications, Event, Mail} from '@material-ui/icons';

const styles = {
	toolbarButtons: {
		marginLeft: 'auto'
	}
};

function Header({classes}) {

	return (
		<AppBar position="static" >
			<Toolbar>
				<Hidden mdUp>

				</Hidden>
				<Hidden smDown>
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
