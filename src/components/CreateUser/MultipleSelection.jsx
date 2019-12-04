import React from 'react';
import { Select, MenuItem, Typography } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/styles';

const styles = () => ({});
function menuItems(suggestions) {
	return suggestions.map((value, i) => (
		<MenuItem key={i} value={value.value}>
			{value.value}
		</MenuItem>
	));
}

function MultipleSelection(props) {
	const { t } = props;
	const languageSuggestions = [
		{ label: t('danish') },
		{ label: t('english') },
		{ label: t('german') }
	].map(suggestion => ({
		value: suggestion.label,
		label: suggestion.label
	}));

	const subjectOfInterest = [
		{ label: t('languages') },
		{ label: t('math') },
		{ label: t('sports') }
	].map(suggestion => ({
		value: suggestion.label,
		label: suggestion.label
	}));

	return (
		<>
			<Typography variant="caption">{t('searchforlanguages')}</Typography>
			<Select
				fullWidth
				name="languageValues"
				multiple={true}
				value={props.languageValues}
				onChange={props.handleChange}
				variant="outlined"
			>
				{menuItems(languageSuggestions)}
			</Select>

			<Typography variant="caption">
				{t('searchforsubjectofinterest')}
			</Typography>

			<Select
				fullWidth
				name="subjectOfInterestValues"
				multiple={true}
				value={props.subjectOfInterestValues}
				onChange={props.handleChange}
				variant="outlined"
			>
				{menuItems(subjectOfInterest)}
			</Select>
		</>
	);
}

export default withTranslation()(withStyles(styles)(MultipleSelection));
