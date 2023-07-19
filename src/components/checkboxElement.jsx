import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "&$checked": {
      color: "#000",
    },
  },

  checked: {},

  wrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  label: {
    fontSize: ".8rem",
    fontWeight: "bold",
    fontFamily: `"Raleway", sans-serif`,
  },
});

const CheckboxElement = ({ option, changeChecked }) => {
  const classes = useStyles();
  const { checked, label, id } = option;
  return (
    <div>
      <FormControlLabel
        classes={{
          label: classes.label,
          root: classes.wrap,
        }}
        control={
          <Checkbox
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
            // inputProps={{'aria-label': 'checkbox with small size'}}
          />
        }
        label={label}
      />
    </div>
  );
};  

export default CheckboxElement;
