import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import {
  ColumnDirective,
  ColumnsDirective,
  RangeDirective,
  RangesDirective,
  SheetDirective,
  SheetsDirective,
  SpreadsheetComponent,
} from "@syncfusion/ej2-react-spreadsheet";

const MainSheet = () => {
  const remoteData = new DataManager({
    url: "https://ej2services.syncfusion.com/production/web-services/api/Orders",
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });

  return (
    <div>
      <SpreadsheetComponent
        allowOpen={true}
        openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
        allowSave={true}
        saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save"
      >
        <SheetsDirective>
          <SheetDirective name="Sheet1">
            <RangesDirective>
              <RangeDirective
                dataSource={remoteData}
                startCell="A1"
              ></RangeDirective>
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
