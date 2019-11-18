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
                onChange={props.handleBlur}
                autoFocus
                onBlur={props.handleBlur}
                error={
                  props.firstName.flag
                    ? !props.firstName.firstNameValid
                    : props.firstName.flag
                }
                helperText={
                  props.firstName.flag
                    ? props.firstName.firstNameValid
                      ? ""
                      : t("typefirstname")
                    : ""
                }
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
                onChange={props.handleBlur}
                onBlur={props.handleBlur}
                error={
                  props.lastName.flag
                    ? !props.lastName.lastNameValid
                    : props.lastName.flag
                }
                helperText={
                  props.lastName.flag
                    ? props.lastName.lastNameValid
                      ? ""
                      : t("typelastname")
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
                id={"email"}
                label={t("email")}
                name={"email"}
                autoComplete={"email"}
                onChange={props.handleBlur}
                onBlur={props.handleBlur}
                error={
                  props.email.flag ? !props.email.emailValid : props.email.flag
                }
                helperText={
                  props.email.flag
                    ? props.email.emailValid
                      ? ""
                      : t("typevalidemail")
                    : ""
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
                id={"phoneNumber"}
                label={t("phonenumber")}
                name={"phoneNumber"}
                autoComplete={"phoneNumber"}
                onChange={props.handleBlur}
                onBlur={props.handleBlur}
                error={
                  props.phoneNumber.flag
                    ? !props.phoneNumber.phoneNumberValid
                    : props.phoneNumber.flag
                }
                helperText={
                  props.phoneNumber.flag
                    ? props.phoneNumber.phoneNumberValid
                      ? ""
                      : t("typecorrectphonenumber")
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
                onChange={props.handleBlur}
                onBlur={props.handleBlur}
                error={
                  props.address.flag
                    ? !props.address.addressValid
                    : props.address.flag
                }
                helperText={
                  props.address.flag
                    ? props.address.addressValid
                      ? ""
                      : t("typeaddress")
                    : ""
                }
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
                onChange={props.handleBlur}
                onBlur={props.handleBlur}
                autoFocus
                error={
                  props.dateOfBirth.flag
                    ? !props.dateOfBirth.dateOfBirthValid
                    : props.dateOfBirth.flag
                }
                helperText={
                  props.dateOfBirth.flag
                    ? props.dateOfBirth.dateOfBirthValid
                      ? ""
                      : t("birthdaynotcorrect")
                    : ""
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
