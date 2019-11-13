import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from 'react-i18next';
import { List, TextField, ListItem, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	root: {
		width: '100%',
		height: 400,
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	},
	spacing: 2
});

function renderRow(categories, classes) {
	return (
		<div className={classes.demo}>
			<List>
				{categories != null
					? categories.map(function(item) {
						return (
							<ListItem button key={item.id}>
								<ListItemText primary={item.name}
									secondary={item.description} />
							</ListItem>
						);
					})
					: null}
			</List>
		</div>
	);
}

renderRow.propTypes = {
	index: PropTypes.number.isRequired,
	style: PropTypes.object.isRequired
};

class RenderCategories extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			categoryName: '',
			categoryDescription: ''
		};

		this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
	}

	handleCategoryNameChange(event) {
		this.setState({categoryName: event.target.value});
	}

	render() {

		const{classes} = this.props;
		return (
			<div className={classes.root}>
	
				<Grid container>
					<Grid item xs={12}>
						{renderRow(this.props.categories, classes)}
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="create-category"
							label="Create category"
							className={classes.textField}
							margin="normal"
							fullWidth={true}
							onChange={this.handleCategoryNameChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							variant="contained"
							color="primary"
							size="large"
							className={classes.button}
							startIcon={<SaveIcon />}
							fullWidth={true}
						>
				Save
						</Button>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withTranslation()(withStyles(styles)(RenderCategories));
