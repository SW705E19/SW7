import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import { FixedSizeList } from "react-window";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: 400,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired
};

function CategoryList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <FixedSizeList height={300} minWidth="xs" itemSize={46} itemCount={200}>
            {renderRow}
          </FixedSizeList>
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="create-category"
            label="Create category here"
            className={classes.textField}
            margin="normal"
            fullWidth="true"
          />
        </Grid>
      <Grid item xs={12}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        fullWidth="true"

      >
        Save
      </Button>
      </Grid>
      </Grid>
    </div>
  );
}

export default CategoryList;
