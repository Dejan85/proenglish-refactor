import React from "react";

const TableRow = (props) => {
  const { heading, rows } = props || {};
  return (
    <div className="pricelist__table-row">
      <div className="pricelist__table-column">
        <h2>{heading.name}</h2>
      </div>

      <div className="pricelist__table-column">
        {rows.first && <div>{rows.first}</div>}
        {rows.third && <div>{rows.third}</div>}
      </div>

      <div className="pricelist__table-column">
        {rows.second && <div>{rows.second}</div>}
        {rows.for && <div>{rows.for}</div>}
      </div>
    </div>
  );
};

export default TableRow;
