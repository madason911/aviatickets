import React from "react";

const RadioField = ({ label, onChange, name, option }) => {
  return (
    <div className="d-flex align-items-center p-1">
      <input type="radio" name={name} onChange={() => onChange(option)} />
      <label className="ms-1">
        {" - "}
        {label}
      </label>
    </div>
  );
};

export default RadioField;
