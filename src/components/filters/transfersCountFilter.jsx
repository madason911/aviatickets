import React from "react";

const TransfersCountFilter = ({ onTransferChange }) => {
  return (
    <div className="transfersFilter">
      <h5 className="fw-bold">Фильтровать</h5>
      <div className="d-flex align-items-center p-1">
        <input
          type="radio"
          id="oneTransferChoice"
          name="radioForTransfersCount"
          onChange={() => onTransferChange("oneTransfer")}
        />
        <label className="ms-1" htmlFor="oneTransferChoice">
          {" "}
          - одна пересадка
        </label>
      </div>
      <div className="d-flex align-items-center p-1">
        <input
          type="radio"
          id="noneTransferChoice"
          name="radioForTransfersCount"
          onChange={() => onTransferChange("noneTransfer")}
        />
        <label className="ms-1" htmlFor="noneTransferChoice">
          {" "}
          - без пересадок
        </label>
      </div>
    </div>
  );
};

export default TransfersCountFilter;
