import React from "react";
import RadioField from "../common/radioField";

const TransfersCountFilter = ({ onTransferChange }) => {
  const options = [
    {
      label: "одна пересадка",
      name: "radioTransfersCount",
      option: "oneTransfer",
    },
    {
      label: "без пересадок",
      name: "radioTransfersCount",
      option: "noneTransfer",
    },
  ];
  return (
    <div className="transfersFilter">
      <h5 className="fw-bold">Фильтровать</h5>
      {options.map((item) => {
        return (
          <RadioField key={item.label} onChange={onTransferChange} {...item} />
        );
      })}
    </div>
  );
};

export default TransfersCountFilter;
