import React from "react";
import RadioField from "../common/radioField";

const Sortings = ({ onSort }) => {
  const options = [
    {
      label: "по возрастанию цены",
      name: "sorting",
      option: { path: "amount", order: "asc" },
    },
    {
      label: "по убыванию цены",
      name: "sorting",
      option: { path: "amount", order: "desc" },
    },
    {
      label: "по времени в пути",
      name: "sorting",
      option: { path: "duration", order: "asc" },
    },
  ];
  return (
    <div className="sortings">
      <h5 className="fw-bold">Сортировать</h5>
      {options.map((item) => {
        return <RadioField key={item.label} onChange={onSort} {...item} />;
      })}
    </div>
  );
};

export default Sortings;
