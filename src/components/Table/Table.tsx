import React, { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { TableType } from "./Table.types";
import Car from "../../assets/sedan.png";
import Jeep from "../../assets/jeep.png";
import Van from "../../assets/van.png";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-dark.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const Table = ({
  isDark = false,
  rowData,
  pagination,
  perPage = 5,
}: TableType) => {
  const carPrice = (value: number) => {
    return { color: value > 50000 ? "#FF5733" : "#00E676" };
  };

  const carType = (value: string) => {
    return (
      <img
        src={value === "sedan" ? Car : value === "jeep" ? Jeep : Van}
        style={{ width: "24px", height: "24px" }}
      />
    );
  };

  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    {
      field: "price",
      cellStyle: (params: any) => {
        return carPrice(params.value);
      },
    },
    {
      field: "type",
      cellRenderer: (params: any) => {
        return carType(params.value);
      },
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: false,
      flex: 1,
      minWidth: 100,
      filter: false,
      resizable: false,
    };
  }, []);

  return (
    <div
      className={`ag-grid-default-table ${
        isDark ? "ag-theme-dark" : "ag-theme-balham"
      }`}
      style={{ height: 400, width: 600 }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={pagination}
        paginationPageSize={perPage}
        cacheBlockSize={perPage}
        defaultColDef={defaultColDef}
      ></AgGridReact>
    </div>
  );
};

export default Table;
