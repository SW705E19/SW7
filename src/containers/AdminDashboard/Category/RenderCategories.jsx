import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from 'react-i18next';
import { List, TextField, ListItem, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { categoryService } from '../../../services/category.service';


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
			category: {
				name: '',
				description: ''
			}
		};

		this.handleOnChange = this.handleOnChange.bind(this);
		this.submit = this.submit.bind(this);
	}

	handleOnChange(event) {
		let category = this.state.category;
		category[event.target.name] = event.target.value;
		this.setState({category: category});
	}

	submit() {
		categoryService.create(
			this.state.category);
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
							name="name"
							label="Category name"
							className={classes.textField}
							margin="normal"
							fullWidth={true}
							onChange={this.handleOnChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="create-category"
							name="description"
							label="Category description"
							className={classes.textField}
							margin="normal"
							fullWidth={true}
							onChange={this.handleOnChange}
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
							onClick={this.submit}
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
