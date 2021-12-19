import React from "react";
import { useState } from "react";

const Draw = () => {
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState("");
  let rowsarray = [];
  let columnsarray = [];

  for (let i = 0; i < rows; i++) {
    rowsarray.push("*");
  }
  for (let i = 0; i < columns; i++) {
    columnsarray.push("*");
  }

  return (
    <>
      <input
        type="text"
        placeholder="please submit columns"
        onChange={(e) =>
          setColumns(e.currentTarget.value < 99 ? e.currentTarget.value : 99)
        }
        value={columns}
      />
      <input
        type="text"
        placeholder="please submit rows"
        onChange={(e) =>
          setRows(e.currentTarget.value < 99 ? e.currentTarget.value : 99)
        }
        value={rows}
      />
      {
        rowsarray.map((v) => <div id="row">*</div>)
      }
      {
        columnsarray.map((v) => <div id="col">*</div>)
      }
    </>
  );
};
export default Draw;
