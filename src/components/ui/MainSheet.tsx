import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import {
  CellStyleModel,
  ColumnDirective,
  ColumnsDirective,
  RangeDirective,
  RangeModel,
  RangesDirective,
  SheetDirective,
  SheetsDirective,
  SpreadsheetComponent,
} from "@syncfusion/ej2-react-spreadsheet";
import { defaultData } from "./data";

const MainSheet = () => {
  let SSObj: SpreadsheetComponent | null;

  const remoteData = new DataManager({
    url: "https://ej2services.syncfusion.com/production/web-services/api/Orders",
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });
  const cellStyle: CellStyleModel = {
    fontWeight: "bold",
    textAlign: "center",
    color: "#C67878",
    backgroundColor: "#F0F8FF",
  };

  const handleChangeData = () => {
    (SSObj?.sheets[0]?.ranges as RangeModel[])[0].dataSource = defaultData;
  };

  return (
    <div className="p-2">
      <button
        className="
        bg-blue-500
        hover:bg-blue-700
        text-center
        text-white
        font-bold
        py-2
        px-4
        rounded
      "
        onClick={handleChangeData}
      >
        Change Data
      </button>

      <SpreadsheetComponent
        allowOpen={true}
        openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
        allowSave={true}
        saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save"
        ref={(ssObj) => (SSObj = ssObj)}
      >
        <SheetsDirective>
          <SheetDirective name="Sheet1">
            <RangesDirective>
              <RangeDirective dataSource={remoteData}></RangeDirective>
            </RangesDirective>
            <ColumnsDirective>
              <ColumnDirective width={150}></ColumnDirective>
              <ColumnDirective width={150}></ColumnDirective>
              <ColumnDirective width={150}></ColumnDirective>
              <ColumnDirective width={150}></ColumnDirective>
              <ColumnDirective width={150}></ColumnDirective>
              <ColumnDirective width={150}></ColumnDirective>
            </ColumnsDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
};

export default MainSheet;
