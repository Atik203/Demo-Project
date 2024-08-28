/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AgChartOptions } from "ag-charts-community";
import { AgCharts } from "ag-charts-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useRef, useState } from "react";

const generateEmptyData = (rows: number, cols: number) => {
  const data: { [key: string]: any }[] = [];
  for (let i = 0; i < rows; i++) {
    const row: { [key: string]: any } = {};
    for (let j = 0; j < cols; j++) {
      row[String.fromCharCode(65 + j)] = "";
    }
    data.push(row);
  }
  return data;
};

const generateEmptyHeaders = (cols: number) => {
  return Array.from({ length: cols }, (_, i) => String.fromCharCode(65 + i));
};

const DataGrid = () => {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<any[]>([]);
  const [columns, setColumns] = useState<any[]>([]);
  const [sheets, setSheets] = useState([
    {
      name: "Sheet1",
      data: generateEmptyData(10, 10),
      headers: generateEmptyHeaders(10),
    },
  ]);
  const [activeSheet, setActiveSheet] = useState(0);
  const [chartType, setChartType] = useState("bar");

  console.log("rowData:", rowData);
  console.log("columns:", columns);

  useEffect(() => {
    fetch("/gridData.json")
      .then((response) => response.json())
      .then((data) => {
        const { header, data: rowData } = data;
        setRowData(rowData);
        setColumns(
          header.map((col: string) => ({
            headerName: col,
            field: col,
            editable: true,
          }))
        );
        setSheets([{ name: "Sheet1", data: rowData, headers: header }]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleExport = () => {
    if (gridRef.current) {
      gridRef.current.api.exportDataAsCsv({
        columnKeys: sheets[activeSheet].headers,
        fileName: "export.csv",
        processCellCallback: (params) => {
          if (params.column.getColId() === "lastUpdated") {
            const date = new Date(params.value);
            return date.toLocaleDateString();
          }
          return params.value;
        },
      });
    }
  };

  const addSheet = () => {
    setSheets([
      ...sheets,
      {
        name: `Sheet${sheets.length + 1}`,
        data: generateEmptyData(10, 10),
        headers: generateEmptyHeaders(10),
      },
    ]);
    setActiveSheet(sheets.length);
  };

  const removeSheet = (index: number) => {
    const newSheets = sheets.filter((_, i) => i !== index);
    setSheets(newSheets);
    setActiveSheet(newSheets.length - 1);
  };

  const addRow = () => {
    const newData = [...sheets[activeSheet].data, {}];
    setSheets(
      sheets.map((sheet, index) =>
        index === activeSheet ? { ...sheet, data: newData } : sheet
      )
    );
  };

  const addColumn = () => {
    const newCol = String.fromCharCode(65 + sheets[activeSheet].headers.length);
    const newData = sheets[activeSheet].data.map((row) => ({
      ...row,
      [newCol]: "",
    }));
    const newHeaders = [...sheets[activeSheet].headers, newCol];
    setSheets(
      sheets.map((sheet, index) =>
        index === activeSheet
          ? { ...sheet, data: newData, headers: newHeaders }
          : sheet
      )
    );
  };

  const saveData = () => {
    const dataToSave = sheets[activeSheet].data;
    console.log("Data to save:", dataToSave);
    // Implement the save logic here, e.g., send data to the server
  };

  const chartOptions: AgChartOptions = {
    data: sheets[activeSheet]?.data || [],
    series: [
      {
        type: chartType as any,
        xKey: "itemName",
        yKey: "quantity",
        yName: "Quantity",
        label: {
          enabled: true,
        },
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
              columnDefs={sheets[activeSheet].headers.map((header) => ({
                headerName: header,
                field: header,
                editable: true,
              }))}
              defaultColDef={{ editable: true }}
              onCellValueChanged={(params) => {
                const updatedSheets = sheets.map((sheet, index) => {
                  if (index === activeSheet) {
                    const updatedData = sheet.data.map((row, rowIndex) => {
                      if (rowIndex === params.node.rowIndex) {
                        return {
                          ...row,
                          [params.colDef.field as string]: params.newValue,
                        };
                      }
                      return row;
                    });
                    return { ...sheet, data: updatedData };
                  }
                  return sheet;
                });
                setSheets(updatedSheets);
              }}
              onCellEditingStopped={(params) => {
                if (params.node.rowIndex === 0) {
                  const updatedHeaders = sheets[activeSheet].headers.map(
                    (header, index) => {
                      if (index === params.column.colId.charCodeAt(0) - 65) {
                        return params.value;
                      }
                      return header;
                    }
                  );
                  const updatedSheets = sheets.map((sheet, index) => {
                    if (index === activeSheet) {
                      return { ...sheet, headers: updatedHeaders };
                    }
                    return sheet;
                  });
                  setSheets(updatedSheets);
                }
              }}
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
            <button
              onClick={saveData}
              className="p-2 bg-green-500 text-white rounded"
            >
              Save
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
