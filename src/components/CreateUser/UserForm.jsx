import React from 'react';
import {
	TextField,
	Container,
	Typography,
	Grid,
	Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { withTranslation } from 'react-i18next';
import MultipleSelection from './MultipleSelection';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(3)
	},
	paper: {
		marginTop: theme.spacing(10),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	buttonWrapper: {
		flex: 1,
		paddingTop: 10,
		paddingBottom: 50
	}
});

function UserForm(props) {
	var { t, classes } = props;

	return (
		<Container component="main" maxWidth="sm">
			<div className={classes.paper}>
				<Typography align="center" variant="h4">
					{t('registerasauser')}
				</Typography>
				<div className={classes.form}>
					<Grid container spacing={2} direction="row">
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="firstname"
								id={'firstname'}
								label={t('firstname')}
								autoComplete={'firstname'}
								onChange={props.handleChange}
								autoFocus
								error={!props.firstName.firstNameValid}
								helperText={
									props.firstName.firstNameValid ? '' : t('typefirstname')
								}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id={'lastname'}
								label={t('lastname')}
								name={'lastname'}
								autoComplete={'lastname'}
								onChange={props.handleChange}
								error={!props.lastName.lastNameValid}
								helperText={
									props.lastName.lastNameValid ? '' : t('typelastname')
								}
								autoFocus
							/>
						</Grid>
					</Grid>
					<Grid container spacing={2} direction="row">
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id={'email'}
								label={t('email')}
								name={'email'}
								autoComplete={'email'}
								onChange={props.handleChange}
								error={!props.email.emailValid}
								helperText={props.email.emailValid ? '' : t('typevalidemail')}
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id={'phoneNumber'}
								label={t('phonenumber')}
								name={'phoneNumber'}
								autoComplete={'phoneNumber'}
								onChange={props.handleChange}
								error={!props.phoneNumber.phoneNumberValid}
								helperText={
									props.phoneNumber.phoneNumberValid
										? ''
										: t('typecorrectphonenumber')
								}
								autoFocus
							/>
						</Grid>
					</Grid>
					<Grid container spacing={2} direction="row">
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								type="password"
								id={'firstPassword'}
								label={t('typepassword')}
								name={'firstPassword'}
								autoComplete={'firstPassword'}
								onChange={props.handleChange}
								error={!props.password.passwordValid}
								helperText={
									props.password.passwordValid ? '' : t('passwordError')
								}
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								type="password"
								id={'secondPassword'}
								label={t('typepasswordagain')}
								name={'secondPassword'}
								autoComplete={'secondPassword'}
								onChange={props.handleChange}
								error={!props.password.passwordValid}
								autoFocus
							/>
						</Grid>
					</Grid>
					<Grid container spacing={2} direction="row">
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id={'address'}
								label={t('address')}
								name={'address'}
								autoComplete={'address'}
								onChange={props.handleChange}
								error={!props.address.addressValid}
								helperText={props.address.addressValid ? '' : t('typeaddress')}
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								margin="normal"
								fullWidth
								id={'education'}
								label={t('education')}
								name={'education'}
								autoComplete={'education'}
								onChange={e => props.handleChange(e)}
								autoFocus
							/>
						</Grid>
					</Grid>
					<Grid container spacing={2} direction="row">
						<Grid item xs={12}>
							<TextField
								fullWidth
								variant="outlined"
								name="dateOfBirth"
								margin="normal"
								id="date"
								label={t('dateOfBirth')}
								type="date"
								InputLabelProps={{
									shrink: true
								}}
								onChange={props.handleChange}
								autoFocus
								error={!props.dateOfBirth.dateOfBirthValid}
								helperText={
									props.dateOfBirth.dateOfBirthValid
										? ''
										: t('birthdaynotcorrect')
								}
							/>
						</Grid>
					</Grid>
					<MultipleSelection
						handleChange={props.handleChange}
						languageValues={props.languageValues}
						subjectOfInterestValues={props.subjectOfInterestValues}
					/>

					<Grid className={classes.buttonWrapper}>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="inherit"
							onClick={props.handleSubmit}
						>
							{t('register')}
						</Button>
					</Grid>
				</div>
			</div>
		</Container>
	);
}

export default withTranslation()(withStyles(styles)(UserForm));
