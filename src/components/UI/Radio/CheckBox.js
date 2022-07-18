import React from "react";

import classes from "./CheckBox.module.css";

const CheckBox = (props) => {
  console.log("CheckBox RUNNING");
  return (
    <React.Fragment>
      <input
        id="chk"
        className={classes.chkBox}
        type={props.type || "checkbox"}
        onClick={props.onClick}
        disabled={props.disabled}
      />
      <label className={classes.chkBoxLabel} htmlFor="chk">
        Allow Toggle
      </label>
      {props.children}
    </React.Fragment>
  );
};

export default React.memo(CheckBox);
