// This file creates two integrated autocompleted fields on the Create User site.
// Much of the code in this file is taken from https://material-ui.com/components/integrated-autocomplete/
// From this there has been made changes so it suit selecting multiple languages and selecting multiple subject on interest.
// The repository can be seen here: https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/integrated-autocomplete/IntegrationReactSelect.js

import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		height: 250,
		minWidth: 290
	},
	input: {
		display: 'flex',
		padding: 0,
		height: 'auto'
	},
	valueContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		flex: 1,
		alignItems: 'center',
		overflow: 'hidden'
	},
	chip: {
		margin: theme.spacing(0.5, 0.25)
	},
	noOptionsMessage: {
		padding: theme.spacing(1, 2)
	},
	placeholder: {
		position: 'absolute',
		left: 2,
		bottom: 6,
		fontSize: 16
	},
	paper: {
		position: 'absolute',
		zIndex: 1,
		marginTop: theme.spacing(1),
		left: 0,
		right: 0
	},
	divider: {
		height: theme.spacing(2)
	}
}));

function NoOptionsMessage(props) {
	return (
		<Typography
			color="textSecondary"
			className={props.selectProps.classes.noOptionsMessage}
			{...props.innerProps}
		>
			{props.children}
		</Typography>
	);
}

NoOptionsMessage.propTypes = {
	/**
   * The children to be rendered.
   */
	children: PropTypes.node,
	/**
   * Props to be passed on to the wrapper.
   */
	innerProps: PropTypes.object.isRequired,
	selectProps: PropTypes.object.isRequired
};

function inputComponent({ inputRef, ...props }) {
	return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = {
	inputRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({
			current: PropTypes.any.isRequired
		})
	])
};

function Control(props) {
	const {
		children,
		innerProps,
		innerRef,
		selectProps: { classes, TextFieldProps }
	} = props;

	return (
		<TextField
			fullWidth
			InputProps={{
				inputComponent,
				inputProps: {
					className: classes.input,
					ref: innerRef,
					children,
					...innerProps
				}
			}}
			{...TextFieldProps}
		/>
	);
}

Control.propTypes = {
	/**
   * Children to render.
   */
	children: PropTypes.node,
	/**
   * The mouse down event and the innerRef to pass down to the controller element.
   */
	innerProps: PropTypes.shape({
		onMouseDown: PropTypes.func.isRequired
	}).isRequired,
	innerRef: PropTypes.oneOfType([
		PropTypes.oneOf([null]),
		PropTypes.func,
		PropTypes.shape({
			current: PropTypes.any.isRequired
		})
	]).isRequired,
	selectProps: PropTypes.object.isRequired
};

function Option(props) {
	return (
		<MenuItem
			ref={props.innerRef}
			selected={props.isFocused}
			component="div"
			style={{
				fontWeight: props.isSelected ? 500 : 400
			}}
			{...props.innerProps}
		>
			{props.children}
		</MenuItem>
	);
}

Option.propTypes = {
	/**
   * The children to be rendered.
   */
	children: PropTypes.node,
	/**
   * props passed to the wrapping element for the group.
   */
	innerProps: PropTypes.shape({
		id: PropTypes.string.isRequired,
		key: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
		onMouseMove: PropTypes.func.isRequired,
		onMouseOver: PropTypes.func.isRequired,
		tabIndex: PropTypes.number.isRequired
	}).isRequired,
	/**
   * Inner ref to DOM Node
   */
	innerRef: PropTypes.oneOfType([
		PropTypes.oneOf([null]),
		PropTypes.func,
		PropTypes.shape({
			current: PropTypes.any.isRequired
		})
	]).isRequired,
	/**
   * Whether the option is focused.
   */
	isFocused: PropTypes.bool.isRequired,
	/**
   * Whether the option is selected.
   */
	isSelected: PropTypes.bool.isRequired
};

function Placeholder(props) {
	const { selectProps, innerProps = {}, children } = props;
	return (
		<Typography
			color="textSecondary"
			className={selectProps.classes.placeholder}
			{...innerProps}
		>
			{children}
		</Typography>
	);
}

Placeholder.propTypes = {
	/**
   * The children to be rendered.
   */
	children: PropTypes.node,
	/**
   * props passed to the wrapping element for the group.
   */
	innerProps: PropTypes.object,
	selectProps: PropTypes.object.isRequired
};

function ValueContainer(props) {
	return (
		<div className={props.selectProps.classes.valueContainer}>
			{props.children}
		</div>
	);
}

ValueContainer.propTypes = {
	/**
   * The children to be rendered.
   */
	children: PropTypes.node,
	selectProps: PropTypes.object.isRequired
};

function MultiValue(props) {
	return (
		<Chip
			tabIndex={-1}
			label={props.children}
			onDelete={props.removeProps.onClick}
			deleteIcon={<CancelIcon {...props.removeProps} />}
		/>
	);
}

MultiValue.propTypes = {
	children: PropTypes.node,
	isFocused: PropTypes.bool.isRequired,
	removeProps: PropTypes.shape({
		onClick: PropTypes.func.isRequired,
		onMouseDown: PropTypes.func.isRequired,
		onTouchEnd: PropTypes.func.isRequired
	}).isRequired,
	selectProps: PropTypes.object.isRequired
};

function Menu(props) {
	return (
		<Paper
			square
			className={props.selectProps.classes.paper}
			{...props.innerProps}
		>
			{props.children}
		</Paper>
	);
}

Menu.propTypes = {
	/**
   * The children to be rendered.
   */
	children: PropTypes.element.isRequired,
	/**
   * Props to be passed to the menu wrapper.
   */
	innerProps: PropTypes.object.isRequired,
	selectProps: PropTypes.object.isRequired
};

const components = {
	Control,
	Menu,
	MultiValue,
	NoOptionsMessage,
	Option,
	Placeholder,
	ValueContainer
};

export default function SelectMultiple() {
	const classes = useStyles();
	const theme = useTheme();
	const [languages, setLanguages] = React.useState(null);
	const [subjectOfInterest, setSubjectOfInterest] = React.useState(null);

	const { t } = useTranslation();

	// Her tilføjes flere sprog
	const languageSuggestions = [
		{ label: t('danish') },
		{ label: t('english') },
		{ label: t('german') }
	].map(suggestion => ({
		value: suggestion.label,
		label: suggestion.label
	}));

	// Her skal læses fra databasen
	const subjectOfInterestSuggestions = [
		{ label: 'Football' },
		{ label: 'Math' }
	].map(suggestion => ({
		value: suggestion.label,
		label: suggestion.label
	}));

	const handleChangeLanguages = value => {
		setLanguages(value);
	};

	const handleChangeSubjectOfInterest = value => {
		setSubjectOfInterest(value);
	};

	const selectStyles = {
		input: base => ({
			...base,
			color: theme.palette.text.primary,
			'& input': {
				font: 'inherit'
			}
		})
	};

	return (
		<div className={classes.root}>
			<NoSsr>
				<Grid container spacing={2} direction="column" justify="Center">
					<Grid item xs={12}>
						<Select
							classes={classes}
							styles={selectStyles}
							inputId="react-select-multiple"
							TextFieldProps={{
								label: t('searchforlanguages'),
								InputLabelProps: {
									htmlFor: 'react-select-multiple',
									shrink: true
								}
							}}
							placeholder={t('languages')}
							options={languageSuggestions}
							components={components}
							value={languages}
							onChange={handleChangeLanguages}
							isMulti
						/>
					</Grid>
					<Grid item xs={12}>
						<Select
							classes={classes}
							styles={selectStyles}
							inputId="react-select-multiple"
							TextFieldProps={{
								label: t('searchforsubjectofinterst'),
								InputLabelProps: {
									htmlFor: 'react-select-multiple',
									shrink: true
								}
							}}
							placeholder={t('subjectofinterst')}
							options={subjectOfInterestSuggestions}
							components={components}
							value={subjectOfInterest}
							onChange={handleChangeSubjectOfInterest}
							isMulti
						/>
					</Grid>
				</Grid>
			</NoSsr>
		</div>
	);
}
