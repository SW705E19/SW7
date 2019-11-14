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
import MultipleSelection from "./MultipleSelection";

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
          <Grid container spacing={2} direction="row">
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="firstname"
                id={t("firstname")}
                label={t("firstname")}
                autoComplete={t("firstname")}
                onChange={props.handleChange}
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
                name={"lastname"}
                autoComplete={t("lastname")}
                onChange={props.handleChange}
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
                id={t("email")}
                label={t("email")}
                name={"email"}
                autoComplete={t("email")}
                onChange={props.handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id={t("phonenumber")}
                label={t("phonenumber")}
                name={"phonenumber"}
                autoComplete={t("phonenumber")}
                onChange={props.handleChange}
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
                id={t("address")}
                label={t("address")}
                name={"address"}
                autoComplete={t("address")}
                onChange={props.handleChange}
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
                name={"education"}
                autoComplete={t("education")}
                onChange={props.handleChange}
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
                label={t("dateOfBirth")}
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={props.handleChange}
                autoFocus
              />
            </Grid>
          </Grid>
          <MultipleSelection />

          <Grid className={classes.buttonWrapper}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="inherit"
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
