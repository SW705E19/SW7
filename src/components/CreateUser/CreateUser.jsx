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
import SelectMultiple from "./SelectMultiple";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  buttonWrapper: {
    flex: 1,
    paddingBottom: 50
  }
}));

function CreateUser(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <Typography align="center" component="h1" variant="title">
          {t("registerasauser")}
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id={t("registerasauser")}
            label={t("registerasauser")}
            name={t("registerasauser")}
            autoComplete={t("registerasauser")}
            autoFocus
          />
          <Grid container spacing={2} direction="row" justify="Center">
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id={t("firstname")}
                label={t("firstname")}
                name={t("firstname")}
                autoComplete={t("firstname")}
                onChange={() => props.handleChange("firstname")}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id={t("lastname")}
                label={t("lastname")}
                name={t("lastname")}
                autoComplete={t("lastname")}
                onChange={() => props.handleChange("lastname")}
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row" justify="Center">
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id={t("email")}
                label={t("email")}
                name={t("email")}
                autoComplete={t("email")}
                onChange={() => props.handleChange("email")}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id={t("phoneNumber")}
                label={t("phoneNumber")}
                name={t("phoneNumber")}
                autoComplete={t("phoneNumber")}
                onChange={() => props.handleChange("phoneNumber")}
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row" justify="Center">
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id={t("address")}
                label={t("address")}
                name={t("address")}
                autoComplete={t("address")}
                onChange={() => props.handleChange("address")}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id={t("education")}
                label={t("education")}
                name={t("education")}
                autoComplete={t("education")}
                onChange={() => props.handleChange("education")}
                autoFocus
              />
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
                onChange={() => props.handleChange("dateOfBirth")}
                autoFocus
              />
            </Grid>
          </Grid>
          <SelectMultiple selectMultiple />

          <Grid justify="center" className={classes.buttonWrapper}>
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
