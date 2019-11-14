import React, {Component} from 'react';
import { Select, MenuItem, Typography } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({});
// TODO liste:
// Fjern sprog fra languagesuggestions når de er valgte.
// Gør dem pænere
// Tilføj subject of interest
class MultipleSelection extends Component {
	constructor(props) {
		super(props);

		this.state = {
            languageValues: [],
            subjectOfInterestValues: [],
        };      
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.handleSubjectOfInterestChange = this.handleSubjectOfInterestChange.bind(this);
	}

	handleLanguageChange(e){
        this.setState({
            languageValues : e.target.value
        })
	} 
      
    handleSubjectOfInterestChange(e){
        this.setState({
            subjectOfInterestValues : e.target.value
        })
	} 

	menuItems(suggestions, values) {
		return suggestions.map((value, i) => 
			<MenuItem key={i} value = {value.value}>
                {value.value}
            </MenuItem>
		);
	}
  
	render() {
        const { t } = this.props;
		const languageSuggestions = [
			{ label: t('danish') },  
            { label: t('english') },
			{ label: t('german') }
		].map(suggestion => ({
			value: suggestion.label,
			label: suggestion.label
        }));
        
		const subjectOfInterest = [
			{ label: 'football' },  
            { label: 'math' },
			{ label: 'Beating up Rasmus that little bitch' }
		].map(suggestion => ({
			value: suggestion.label,
			label: suggestion.label
        }));

		return (
            <div>
            <Typography variant='caption' >
                {t("searchforlanguages")}
            </Typography>
			<Select
                fullWidth
				multiple={true}
                value={this.state.languageValues}
                renderValue = {selected => selected.join(', ')}
                onChange={this.handleLanguageChange} 
                variant = 'outlined'
                width = {true}
			>
				{this.menuItems(languageSuggestions, this.state.languageValues)}
			</Select>

            <Typography variant='caption' >
                {t("searchforsubjectofinterest")}
            </Typography>

			<Select
                fullWidth
				multiple={true}
                value={this.state.subjectOfInterestValues}
                renderValue = {selected => selected.join(', ')}
                onChange={this.handleSubjectOfInterestChange} 
                variant = 'outlined'
                width = {true}
			>
				{this.menuItems(subjectOfInterest, this.state.subjectOfInterestValues)}
			</Select> 
            </div>
		);
	}
}

export default withTranslation()(withStyles(styles)(MultipleSelection))