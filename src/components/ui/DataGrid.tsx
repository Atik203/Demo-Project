/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AgCharts } from "ag-charts-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useRef, useState } from "react";

const generateEmptyData = (rows: number, cols: number) => {
  const data: { [key: string]: any }[] = [];
  for (let i = 0; i < rows; i++) {
    const row: { [key: string]: any } = { rowNumber: i + 1 };
    for (let j = 0; j < cols; j++) {
      row[String.fromCharCode(65 + j)] = "";
    }
    data.push(row);
  }
  return data;
};

const DataGrid = () => {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState([]);
  const [columns, setColumns] = useState([
    {
      headerName: "",
      field: "rowNumber",
      editable: false,
      pinned: "left",
    },
  ]);
  const [sheets, setSheets] = useState([
    { name: "Sheet1", data: generateEmptyData(10, 10) },
  ]);
  const [activeSheet, setActiveSheet] = useState(0);
  const [chartType, setChartType] = useState("bar");

  useEffect(() => {
    fetch("/gridData.json")
      .then((response) => response.json())
      .then((data) => {
        const { header, data: rowData } = data;
        setRowData(rowData);
        setColumns([
          {
            headerName: "",
            field: "rowNumber",
            editable: false,
            pinned: "left",
          },
          ...header.map((col) => ({
            headerName: col,
            field: col,
            editable: true,
          })),
        ]);
        setSheets([{ name: "Sheet1", data: rowData }]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleExport = () => {
    if (gridRef.current) {
      gridRef.current.api.exportDataAsCsv();
    }
  };

  const addSheet = () => {
    setSheets([
      ...sheets,
      { name: `Sheet${sheets.length + 1}`, data: generateEmptyData(10, 10) },
    ]);
    setActiveSheet(sheets.length);
  };

  const removeSheet = (index) => {
    const newSheets = sheets.filter((_, i) => i !== index);
    setSheets(newSheets);
    setActiveSheet(newSheets.length - 1);
  };

  const addRow = () => {
    const newData = [
      ...sheets[activeSheet].data,
      { rowNumber: sheets[activeSheet].data.length + 1 },
    ];
    setSheets(
      sheets.map((sheet, index) =>
        index === activeSheet ? { ...sheet, data: newData } : sheet
      )
    );
  };

  const addColumn = () => {
    const newData = sheets[activeSheet].data.map((row) => ({
      ...row,
      [String.fromCharCode(65 + Object.keys(row).length - 1)]: "",
    }));
    setSheets(
      sheets.map((sheet, index) =>
        index === activeSheet ? { ...sheet, data: newData } : sheet
      )
    );
  };

  const chartOptions = {
    data: sheets[activeSheet]?.data || [],
    series: [
      {
        type: chartType,
        xKey: "itemName",
        yKey: "quantity",
        yName: "Quantity",
      },
    ],
  };

  return (
    <div className="p-8">
      <div className="tabs flex space-x-2 mb-4">
        {sheets.map((sheet, index) => (
          <div key={index} className="flex items-center space-x-2">
            <button
              onClick={() => setActiveSheet(index)}
              className={`tab p-2 rounded ${
                activeSheet === index ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {sheet.name}
            </button>
            <XMarkIcon
              className="h-5 w-5 text-red-500 cursor-pointer"
              onClick={() => removeSheet(index)}
            />
          </div>
        ))}
        <button
          onClick={addSheet}
          className="tab p-2 bg-green-500 text-white rounded"
        >
          + Add Sheet
        </button>
      </div>
      {sheets.length === 0 ? (
        <div className="text-center text-gray-500">No sheets available</div>
      ) : (
        <>
          <div
            className="ag-theme-alpine"
            style={{ height: "400px", width: "100%" }}
          >
            <AgGridReact
              ref={gridRef}
              rowData={sheets[activeSheet].data}
              columnDefs={columns}
            />
          </div>
          <div className="mt-4 flex space-x-4">
            <button
              onClick={handleExport}
              className="p-2 bg-blue-500 text-white rounded"
            >
              Export to CSV
            </button>
            <select
              value={chartType}
              onChange={(e) => setChartType(e.target.value)}
              className="p-2 bg-gray-200 rounded"
            >
              <option value="bar">Bar Chart</option>
              <option value="line">Line Chart</option>
              <option value="pie">Pie Chart</option>
            </select>
            <button
              onClick={addRow}
              className="p-2 bg-gray-200 rounded flex items-center"
            >
              <PlusIcon className="h-5 w-5 mr-1" /> Add Row
            </button>
            <button
              onClick={addColumn}
              className="p-2 bg-gray-200 rounded flex items-center"
            >
              <PlusIcon className="h-5 w-5 mr-1" /> Add Column
            </button>
          </div>
          <div className="mt-4">
            <AgCharts options={chartOptions} />
          </div>
        </>
      )}
    </div>
  );
};

export default DataGrid;
