import React from "react";
import {
  TextField,
  Container,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { withTranslation } from "react-i18next";
import MultipleSelection from "../CreateUser/MultipleSelection";

const styles = () => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  form: {
    width: "100%"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  buttonWrapper: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 50,
    paddingLeft: 10,
    paddingRight: 10
  }
});

function EditUserForm(props) {
  const { t, classes } = props;

  return (
    <Container maxWidth="sm">
      <div className={classes.paper}>
        <Typography align="center" variant="h4">
          {t("edituser")}
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
                id={"firstname"}
                label={t("firstname")}
                autoComplete={"firstname"}
                onChange={props.handleChange}
                autoFocus
                value={props.firstName.firstName}
                error={!props.firstName.firstNameValid}
                helperText={
                  props.firstName.firstNameValid ? "" : t("typefirstname")
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
                value={props.lastName.lastName}
                onChange={props.handleChange}
                error={!props.lastName.lastNameValid}
                helperText={
                  props.lastName.lastNameValid ? "" : t("typelastname")
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
                value={props.email.email}
                onChange={props.handleChange}
                error={!props.email.emailValid}
                helperText={props.email.emailValid ? "" : t("typevalidemail")}
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
                value={props.phoneNumber.phoneNumber}
                onChange={props.handleChange}
                error={!props.phoneNumber.phoneNumberValid}
                helperText={
                  props.phoneNumber.phoneNumberValid
                    ? ""
                    : t("typecorrectphonenumber")
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
                id={"firstPassword"}
                label={t("typepassword")}
                name={"firstPassword"}
                value={props.password.firstPassword}
                autoComplete={"firstPassword"}
                onChange={props.handleChange}
                error={!props.password.passwordValid}
                helperText={
                  props.password.passwordValid ? "" : t("passwordError")
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
                id={"secondPassword"}
                label={t("typepasswordagain")}
                name={"secondPassword"}
                value={props.password.secondPassword}
                autoComplete={"secondPassword"}
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
                id={"address"}
                label={t("address")}
                name={"address"}
                autoComplete={"address"}
                value={props.address.address}
                onChange={props.handleChange}
                error={!props.address.addressValid}
                helperText={props.address.addressValid ? "" : t("typeaddress")}
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
                value={props.education}
                autoComplete={"education"}
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
                label={t("dateOfBirth")}
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                value={props.dateOfBirth.dateOfBirth}
                onChange={props.handleChange}
                autoFocus
                error={!props.dateOfBirth.dateOfBirthValid}
                helperText={
                  props.dateOfBirth.dateOfBirthValid
                    ? ""
                    : t("birthdaynotcorrect")
                }
              />
            </Grid>
          </Grid>
          <MultipleSelection
            handleChange={props.handleChange}
            languageValues={props.languageValues}
            subjectOfInterestValues={props.subjectOfInterestValues}
          />
          <Grid container spacing={2} direction="row">
            <Grid className={classes.buttonWrapper}>
              {/* TODO: Her skal redirectes ens brugerside*/}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="inherit"
                onClick={props.handleSubmit}
              >
                {t("edituser")}
              </Button>
            </Grid>
            <Grid className={classes.buttonWrapper}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                onClick={props.handleDeleteButton}
              >
                {t("deleteuser")}
              </Button>
              <Dialog
                open={props.deleteDialogOpen}
                onClose={props.handleCancelDelete}
              >
                <DialogTitle id="alert-dialog-title">
                  {t("deleteuserwarning")}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {t("deleteuserdialog")}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={props.handleCancelDelete}
                    color="primary"
                    variant="contained"
                  >
                    {t("cancel")}
                  </Button>
                  <Button
                    onClick={props.handleDelete}
                    color="secondary"
                    variant="contained"
                  >
                    {t("deleteuser")}
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default withTranslation()(withStyles(styles)(EditUserForm));
