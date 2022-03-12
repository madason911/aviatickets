import React from "react";
import styles from "./checkBoxField.module.css";

const CheckBoxField = ({ name, onChange, amount }) => {
  return (
    <div
      className="d-flex justify-content-between p-1 align-items-center"
      key={name}
    >
      <input type="checkbox" onChange={onChange} name={name} />
      <p className={"ms-1 " + styles.airline}> {name} </p>
      <span className={"ms-1 text-end " + styles.amount}> от {amount} р.</span>
    </div>
  );
};

export default CheckBoxField;
