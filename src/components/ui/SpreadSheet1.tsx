import {
  CellDirective,
  CellsDirective,
  ColumnDirective,
  ColumnsDirective,
  ConditionalFormatDirective,
  ConditionalFormatsDirective,
  RangeDirective,
  RangesDirective,
  RowDirective,
  RowsDirective,
  SheetDirective,
  SheetsDirective,
  SpreadsheetComponent,
} from "@syncfusion/ej2-react-spreadsheet";

import { FormattingData } from "./data";
function SpreadSheet1() {
  let ssObj: SpreadsheetComponent;
  const onCreated = () => {
    ssObj.numberFormat("$#,##0.00", "D3:F18");
    ssObj.cellFormat(
      {
        fontWeight: "bold",
        textAlign: "center",
        verticalAlign: "middle",
        fontSize: "13pt",
        backgroundColor: "#1E88E5",
        color: "#ffffff",
      },
      "A1"
    );
    ssObj.cellFormat(
      { fontWeight: "bold", textAlign: "center", backgroundColor: "#BBDEFB" },
      "A2:H2"
    );
    ssObj.cellFormat({ backgroundColor: "#F9FBE7" }, "D3:F18");
    ssObj.conditionalFormat({ type: "BlueDataBar", range: "D3:D18" });
    ssObj.conditionalFormat({ type: "GreenDataBar", range: "E3:E18" });
    ssObj.conditionalFormat({ type: "ThreeStars", range: "H3:H18" });
  };
  return (
    <div className="App">
      <SpreadsheetComponent
        ref={(s: SpreadsheetComponent) => (ssObj = s)}
        height={560}
        allowNumberFormatting={true}
        created={onCreated}
        allowCellFormatting={true}
        allowConditionalFormat={true}
      >
        <SheetsDirective>
          <SheetDirective name="Inventory List">
            <RowsDirective>
              <RowDirective height={30}>
                <CellsDirective>
                  <CellDirective
                    value="Inventory List"
                    colSpan={8}
                  ></CellDirective>
                </CellsDirective>
              </RowDirective>
            </RowsDirective>
            <ConditionalFormatsDirective>
              <ConditionalFormatDirective
                type="LessThan"
                cFColor="RedFT"
                value="8/30/2019"
                range="G3:G18"
              ></ConditionalFormatDirective>
              <ConditionalFormatDirective
                type="GYRColorScale"
                range="C3:C18"
              ></ConditionalFormatDirective>
            </ConditionalFormatsDirective>
            <RangesDirective>
              <RangeDirective
                dataSource={FormattingData}
                startCell="A2"
              ></RangeDirective>
            </RangesDirective>
            <ColumnsDirective>
              <ColumnDirective width={100}></ColumnDirective>
              <ColumnDirective width={158}></ColumnDirective>
              <ColumnDirective width={72}></ColumnDirective>
              <ColumnDirective width={113}></ColumnDirective>
              <ColumnDirective width={113}></ColumnDirective>
              <ColumnDirective width={77}></ColumnDirective>
              <ColumnDirective width={97}></ColumnDirective>
              <ColumnDirective width={73}></ColumnDirective>
            </ColumnsDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
}

export default SpreadSheet1;
