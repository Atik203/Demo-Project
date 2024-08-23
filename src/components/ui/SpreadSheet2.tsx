import {
  CellDirective,
  CellsDirective,
  ColumnDirective,
  ColumnsDirective,
  RowDirective,
  RowsDirective,
  SheetDirective,
  SheetsDirective,
  SpreadsheetComponent,
} from "@syncfusion/ej2-react-spreadsheet";

const SpreadSheet2 = () => {
  let ssObj: SpreadsheetComponent;
  const image1 = [
    {
      src: "https://ej2.syncfusion.com/react/demos/src/grid/images/6.png",
      height: 150,
      width: 180,
      top: 62,
      left: 50,
    },
  ];
  const image2 = [
    {
      src: "https://ej2.syncfusion.com/react/demos/src/grid/images/1.png",
      height: 150,
      width: 180,
      top: 290,
      left: 50,
    },
  ];
  const onCreated = () => {
    ssObj?.merge("B2:D2");
    ssObj?.merge("B11:D11");
    ssObj?.cellFormat(
      {
        fontWeight: "bold",
        textAlign: "center",
        verticalAlign: "middle",
        backgroundColor: "#1167b1",
        color: "#ffffff",
      },
      "B2"
    );
    ssObj?.cellFormat(
      {
        fontWeight: "bold",
        textAlign: "center",
        verticalAlign: "middle",
        backgroundColor: "#1167b1",
        color: "#ffffff",
      },
      "B11"
    );
    ssObj?.setBorder({ border: "1px solid #1167b1" }, "B2:D9", "Outer");
    ssObj?.setBorder({ border: "1px solid #1167b1" }, "B11:D18", "Outer");
    ssObj?.insertImage(image1, "B3");

    // Use below code to Delete image
    // setTimeout(function(){
    //     let rangeIndex = getRangeIndexes("B3");
    //     let cell = getCell(rangeIndex[0], rangeIndex[1], ssObj?.getActiveSheet());
    //     if(cell.image){
    //         ssObj?.deleteImage(cell.image[0].id as string);
    //     }
    // }, 2000)
  };
  return (
    <div className="App">
      <SpreadsheetComponent
        ref={(s: SpreadsheetComponent) => (ssObj = s)}
        height={1000}
        created={onCreated}
        allowImage={true}
      >
        <SheetsDirective>
          <SheetDirective name="Employee Deatils" showGridLines={false}>
            <RowsDirective>
              <RowDirective index={1} height={30}>
                <CellsDirective>
                  <CellDirective index={1} value="Mark Spencer"></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective height={40}>
                <CellsDirective>
                  <CellDirective index={2} value="Id"></CellDirective>
                  <CellDirective value=": 1001"></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective index={2} value="Gender"></CellDirective>
                  <CellDirective value=": Male"></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective
                    index={2}
                    value="Contact Preference"
                  ></CellDirective>
                  <CellDirective value=": Email"></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective index={2} value="Email"></CellDirective>
                  <CellDirective value=": mark@gmail.com"></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective
                    index={2}
                    value="Date of Birth"
                  ></CellDirective>
                  <CellDirective value=": Jan 3, 1985"></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective index={2} value="Department"></CellDirective>
                  <CellDirective value=": IT"></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective height={40}>
                <CellsDirective>
                  <CellDirective
                    index={2}
                    value="IsActive"
                    style={{ verticalAlign: "top" }}
                  ></CellDirective>
                  <CellDirective
                    value=": True"
                    style={{ verticalAlign: "top" }}
                  ></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective index={10} height={30}>
                <CellsDirective>
                  <CellDirective
                    index={1}
                    value="Mary Ellen Mark"
                  ></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective height={40}>
                <CellsDirective>
                  <CellDirective
                    index={2}
                    value="Id"
                    image={image2}
                  ></CellDirective>
                  <CellDirective value=": 1002"></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective index={2} value="Gender"></CellDirective>
                  <CellDirective value=": Female"></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective
                    index={2}
                    value="Contact Preference"
                  ></CellDirective>
                  <CellDirective value=": Phone"></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective index={2} value="Email"></CellDirective>
                  <CellDirective value=": mary@gmail.com"></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective
                    index={2}
                    value="Date of Birth"
                  ></CellDirective>
                  <CellDirective value=": Dec 8, 1989"></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective index={2} value="Department"></CellDirective>
                  <CellDirective value=": HR"></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective height={40}>
                <CellsDirective>
                  <CellDirective
                    index={2}
                    value="IsActive"
                    style={{ verticalAlign: "top" }}
                  ></CellDirective>
                  <CellDirective
                    value=": True"
                    style={{ verticalAlign: "top" }}
                  ></CellDirective>
                </CellsDirective>
              </RowDirective>
            </RowsDirective>
            <ColumnsDirective>
              <ColumnDirective width={20}></ColumnDirective>
              <ColumnDirective width={280}></ColumnDirective>
              <ColumnDirective width={172}></ColumnDirective>
              <ColumnDirective width={160}></ColumnDirective>
            </ColumnsDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
};

export default SpreadSheet2;
