import React, { useState } from "react";
import _ from "lodash";
const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const [pagesLimit, setPagesLimit] = useState({ left: 1, right: 5 });
  const pages = _.range(
    Math.max(1, pagesLimit.left),
    Math.min(pagesCount + 1, pagesLimit.right + 1)
  );

  const checkPaginateLimit = () => {
    if (currentPage > pagesLimit.right - 1) {
      setPagesLimit((prev) => ({
        left: prev.left + 2,
        right: prev.right + 2,
      }));
    }

    if (currentPage < pagesLimit.left + 1) {
      setPagesLimit((prev) => ({
        left: prev.left - 1,
        right: prev.right - 1,
      }));
    }
  };

  checkPaginateLimit();

  if (pagesCount === 1) return null;
  return (
    <nav>
      <ul className="pagination">
        <li className={"page-item " + (currentPage === 1 ? "disabled" : "")}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            aria-disabled="true"
          >
            &#8592;
          </button>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={"page-item " + (page === currentPage ? "active" : "")}
          >
            <button
              className="page-link"
              onClick={() => {
                onPageChange(page);
              }}
            >
              {page}
            </button>
          </li>
        ))}
        <li
          className={
            "page-item " + (currentPage === pagesCount ? "disabled" : "")
          }
        >
          <button
            className={"page-link "}
            onClick={() => onPageChange(currentPage + 1)}
          >
            &#8594;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
