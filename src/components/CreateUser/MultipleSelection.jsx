import React from "react";
import { Select, MenuItem, Typography } from "@material-ui/core";
import { withTranslation } from "react-i18next";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({});
// TODO liste:
// Fjern sprog fra languagesuggestions når de er valgte.
function menuItems(suggestions, values) {
  return suggestions.map((value, i) => (
    <MenuItem key={i} value={value.value}>
      {value.value}
    </MenuItem>
  ));
}

function MultipleSelection(props) {
  // Tilføjes flere sprog
  const { t } = props;
  const languageSuggestions = [
    { label: t("danish") },
    { label: t("english") },
    { label: t("german") }
  ].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label
  }));

  // Skal læse fra databasen
  const subjectOfInterest = [
    { label: "football" },
    { label: "math" },
    { label: "Beating up Rasmus that little bitch" }
  ].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label
  }));

  return (
    <div>
      <Typography variant="caption">{t("searchforlanguages")}</Typography>
      <Select
        fullWidth
        name="languageValues"
        multiple={true}
        value={props.languageValues}
        renderValue={selected => selected.join(", ")}
        onChange={props.handleChange}
        variant="outlined"
      >
        {menuItems(languageSuggestions, props.languageValues)}
      </Select>

      <Typography variant="caption">
        {t("searchforsubjectofinterest")}
      </Typography>

      <Select
        fullWidth
        name="subjectOfInterestValues"
        multiple={true}
        value={props.subjectOfInterestValues}
        renderValue={selected => selected.join(", ")}
        onChange={props.handleChange}
        variant="outlined"
      >
        {menuItems(subjectOfInterest, props.subjectOfInterestValues)}
      </Select>
    </div>
  );
}

export default withTranslation()(withStyles(styles)(MultipleSelection));
