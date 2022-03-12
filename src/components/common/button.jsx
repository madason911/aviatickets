import React from "react";

const Button = ({ children, onButtonClick }) => {
  return (
    <button className="btn btn-warning w-100 mt-1" onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default Button;
