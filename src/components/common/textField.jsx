import React from "react";

const TextField = ({ label, name, value, onChange, error }) => {
  const getInputClasses = () => {
    return "form-control" + (!error ? " is-invalid" : "");
  };
  return (
    <div className="mb-1">
      <label htmlFor={name}> {label}</label>
      <div className="input-group has-validation">
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={getInputClasses()}
        />
        {error && <div className="invalid-feedback ">Данные не корректны</div>}
      </div>
    </div>
  );
};

export default TextField;
