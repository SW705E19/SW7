import React from 'react';
import { Grid, IconButton} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import { Facebook, Twitter, Instagram, LinkedIn } from '@material-ui/icons';

function Footer() {
	const useStyles = makeStyles(() => ({
		footer: {
			position: 'fixed',
			left: 0,
			bottom: 0,
			width: '100%',
			textAlign: 'center',
			borderTopStyle: 'ridge',
		}
	}));

	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<IconButton>
						<Facebook />
					</IconButton>
					<IconButton>
						<Instagram />
					</IconButton>
					<IconButton>
						<Twitter />
					</IconButton>
					<IconButton>
						<LinkedIn />
					</IconButton>
								
				</Grid>
				<Grid item xs={12}>
					<p>Copyright © 2019 SW705E19</p>
				</Grid>
			</Grid>
		</footer>
	);
}

export default Footer;
