import { Workbook } from "@fortune-sheet/react";

const SpreadSheet = () => {
  return (
    <div>
      <Workbook data={[{ name: "Sheet1" }]} column={10} row={10} />
    </div>
  );
};

export default SpreadSheet;
