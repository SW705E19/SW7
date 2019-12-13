import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
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
							<TableCell>
								<Typography align="left" variant="h5">
									{t('email')}
								</Typography>
							</TableCell>
							<TableCell align="right">
								<Typography align="right" variant="h5">
									{t('addremoverole')}
								</Typography>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.users.map(row => (
							<TableRow key={row.email}>
								<TableCell component="th" scope="row">
									{row.email}
								</TableCell>
								<TableCell align="right">
									<ToggleButton
										name={row.id}
										value="check"
										selected={row.roles.includes('TUTOR')}
										onChange={e => {
											e.index = row.index;
											props.handleOnChange(e);
										}}
									>
										<CheckIcon/>
									</ToggleButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
		</div>
	);
}

export default RenderService;
