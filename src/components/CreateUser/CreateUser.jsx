import React from "react";
import {
  TextField,
  Container,
  Typography,
  Grid,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import SelectMultipleLanguages from "../CreateUser/SelectMultipleLanguages";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
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

function selectMultiple(name) {
  if (name === "languages") {
    return <SelectMultipleLanguages selectMultiple="Languages" />;
  } else {
    return <SelectMultipleLanguages selectMultiple="Subject of interest" />;
  }
}

function CreateUser() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography align="center" component="h1" variant="title">
          Register as a user
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <Grid container spacing={2} direction="row" justify="Center">
            <Grid item xs={12} sm={6}>
              {textField("First name")}
            </Grid>
            <Grid item xs={12} sm={6}>
              {textField("Last name")}
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row" justify="Center">
            <Grid item xs={12} sm={6}>
              {textField("Email")}
            </Grid>
            <Grid item xs={12} sm={6}>
              {textField("Phone number")}
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row" justify="Center">
            <Grid item xs={12} sm={6}>
              {textField("Address")}
            </Grid>

            <Grid item xs={12} sm={6}>
              {textField("Education")}
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row" justify="Center">
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                id="date"
                label="Birthday"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row" justify="Center">
            {selectMultiple("languages")}
          </Grid>
          <Grid container spacing={2} direction="row" justify="Center">
            {selectMultiple("subject of interest")}
          </Grid>
          <Grid justify="center">
            <Button variant="outlined" color="inherit">
              Register
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default CreateUser;
