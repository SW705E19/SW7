import React from "react";
import {
  TextField,
  Container,
  Typography,
  Grid,
  Button,
  FormControl
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { withTranslation } from "react-i18next";
import MultipleSelection from "./MultipleSelection";

// TODO liste:
// Fjern sprog fra languagesuggestions når de er valgte.
// Lav confirmation på felter - Benyt onBlur til confirmation og error

const styles = theme => ({
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
    paddingTop: 10,
    paddingBottom: 50
  }
});

function UserForm(props) {
  var { t, classes } = props;

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <Typography align="center" component="h1" variant="title">
          {t("registerasauser")}
        </Typography>
        <FormControl className={classes.form} noValidate autoComplete="off">
          <Grid container spacing={2} direction="row">
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="firstname"
                id={"firstname"}
                label={t("firstname")}
                autoComplete={"firstname"}
                onChange={props.handleChange}
                autoFocus
                onBlur={props.handleBlur}
                error={props.firstName.firstNameValid && props.firstName.flag}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id={"lastname"}
                label={t("lastname")}
                name={"lastname"}
                autoComplete={"lastname"}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.lastName.lastNameValid && props.lastName.flag}
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
                id={"email"}
                label={t("email")}
                name={"email"}
                autoComplete={"email"}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.email.emailValid && props.email.flag}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id={"phonenumber"}
                label={t("phonenumber")}
                name={"phonenumber"}
                autoComplete={"phonenumber"}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={
                  props.phoneNumber.phoneNumberValid && props.phoneNumber.flag
                }
                helperText={
                  props.phoneNumber.phoneNumberValid && props.phoneNumber.flag
                    ? "Please insert a valid phone number"
                    : ""
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
                id={"address"}
                label={t("address")}
                name={"address"}
                autoComplete={"address"}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.address.addressValid && props.address.address}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id={"education"}
                label={t("education")}
                name={"education"}
                autoComplete={"education"}
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
                onBlur={props.handleBlur}
                autoFocus
                error={props.dateOfBirth.dateOfBirthValid}
              />
            </Grid>
          </Grid>
          <MultipleSelection
            handleChange={props.handleChange}
            languageValues={props.languageValues}
            subjectOfInterestValues={props.subjectOfInterestValues}
          />

          <Grid className={classes.buttonWrapper}>
            <Button type="submit" fullWidth variant="contained" color="inherit">
              {t("register")}
            </Button>
          </Grid>
        </FormControl>
      </div>
    </Container>
  );
}

export default withTranslation()(withStyles(styles)(UserForm));
