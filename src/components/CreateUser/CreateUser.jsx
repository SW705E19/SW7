import React from 'react';
import {
  TextField,
  Container,
  Typography,
  Grid,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import SelectMultiple from "./SelectMultiple";

const useStyles = makeStyles(theme => ({
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
	}
}));

function textField(name) {
	return (
		<TextField
			variant="outlined"
			margin="normal"
			required
			fullWidth
			id={name}
			label={name}
			name={name}
			autoComplete={name}
			autoFocus
		/>
	);
}

function CreateUser() {
	const classes = useStyles();
	const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography align="center" component="h1" variant="title">
          {t("registerasauser")}
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <Grid container spacing={2} direction="row" justify="Center">
            <Grid item xs={12} sm={6}>
              {textField(t("firstname"))}
            </Grid>
            <Grid item xs={12} sm={6}>
              {textField(t("lastname"))}
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row" justify="Center">
            <Grid item xs={12} sm={6}>
              {textField(t("email"))}
            </Grid>
            <Grid item xs={12} sm={6}>
              {textField(t("phonenumber"))}
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row" justify="Center">
            <Grid item xs={12} sm={6}>
              {textField(t("address"))}
            </Grid>
            <Grid item xs={12} sm={6}>
              {textField(t("education"))}
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row" justify="Center">
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                id="date"
                label={t("dateOfBirth")}
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                autoFocus
              />
            </Grid>
          </Grid>
          <SelectMultipleLanguages selectMultiple />
          <Grid justify="center">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="inherit"
              justify="center"
            >
              {t("register")}
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default CreateUser;
