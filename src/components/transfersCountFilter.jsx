import React from "react";

const TransfersCountFilter = () => {
  return (
    <div className="transfersFilter">
      <h5 className="fw-bold">Фильтровать</h5>
      <div className="d-flex align-items-center">
        <input
          type="radio"
          id="oneTransferChoice"
          name="radioForTransfersCount"
        />
        <label className="ms-1" htmlFor="oneTransferChoice">
          {" "}
          - одна пересадка
        </label>
      </div>
      <div className="d-flex align-items-center">
        <input
          type="radio"
          id="noneTransferChoice"
          name="radioForTransfersCount"
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
