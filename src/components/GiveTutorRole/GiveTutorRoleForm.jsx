import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';

function RenderService(props) {
	const useStyles = makeStyles({
		root: {
			width: '100%',
		},
		paper: {
			width: '100%',
			overflowX: 'auto',
		},
		table: {
			minWidth: 450,
		},
	});
	
	const { t } = useTranslation();
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Table className={classes.table} size="small" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell>Users E-mail</TableCell>
							<TableCell>asd{props.service}</TableCell>
							<TableCell align="right">Add / remove tutor role</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
						<TableCell component="th" scope="row">
								{props.users}
								</TableCell>
						</TableRow>
						{/* {props.service.map(row => (
							<TableRow key={row.name}>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">
									<ToggleButton
										value="check"
										selected={row.roles.includes('TUTOR')}
										onChange={() => {
							
										}}
									>
										<CheckIcon />
									</ToggleButton>
								</TableCell>
							</TableRow>
						))} */}
					</TableBody>
				</Table>
			</Paper>
		</div>
	);
}

export default RenderService;
