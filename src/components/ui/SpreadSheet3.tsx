import {
  CellDirective,
  CellsDirective,
  ChartModel,
  ColumnDirective,
  ColumnsDirective,
  getCell,
  getFormatFromType,
  getRangeIndexes,
  RangeDirective,
  RangesDirective,
  RowDirective,
  RowsDirective,
  SheetDirective,
  SheetsDirective,
  SpreadsheetComponent,
} from "@syncfusion/ej2-react-spreadsheet";

import { GDPData } from "./data";

const SpreadSheet3 = () => {
  let ssObj: SpreadsheetComponent;
  const chartDetails: ChartModel[] = [
    { type: "Line", theme: "Fabric", isSeriesInRows: false, range: "A2:E8" },
  ];
  const onCreated = () => {
    // Formatting cells dynamically using cellFormat method
    ssObj.cellFormat(
      {
        backgroundColor: "#e56590",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
      },
      "A1:E1"
    );
    // Applying currency format to the specified range.
    ssObj.numberFormat(getFormatFromType("Currency"), "B2:E8");

    //Insert chart through Spreadsheet method.
    // ssObj.insertChart(chartDetails);

    setTimeout(function () {
      const rangeIndex = getRangeIndexes("G1");
      const cell = getCell(
        rangeIndex[0],
        rangeIndex[1],
        ssObj.getActiveSheet()
      );

      if (cell.chart) {
        ssObj.deleteChart(cell.chart[0].id);
      }
    }, 2000);
  };
  return (
    <div className="App">
      <SpreadsheetComponent
        ref={(s: SpreadsheetComponent) => (ssObj = s)}
        height={560}
        created={onCreated}
        allowChart={true}
      >
        <SheetsDirective>
          <SheetDirective name="GDP">
            <RowsDirective>
              <RowDirective index={0}>
                <CellsDirective>
                  <CellDirective index={6} chart={chartDetails}></CellDirective>
                </CellsDirective>
              </RowDirective>
            </RowsDirective>
            <RangesDirective>
              <RangeDirective dataSource={GDPData}></RangeDirective>
            </RangesDirective>
            <ColumnsDirective>
              <ColumnDirective width={80}></ColumnDirective>
              <ColumnDirective width={75}></ColumnDirective>
              <ColumnDirective width={75}></ColumnDirective>
              <ColumnDirective width={75}></ColumnDirective>
              <ColumnDirective width={75}></ColumnDirective>
            </ColumnsDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
};

export default SpreadSheet3;
