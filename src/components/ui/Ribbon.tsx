// Ribbon.tsx

import React from "react";
import { RibbonProps } from "../../types";

const Ribbon: React.FC<RibbonProps> = ({
  onInsertChart,
  onInsertTextBox,
  onInsertPicture,
}) => {
  return (
    <nav className="bg-gray-200 p-4 mb-8">
      <button
        className="mr-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => onInsertChart("Bar")}
      >
        Insert Bar Chart
      </button>
      <button
        className="mr-4 p-2 bg-green-500 text-white rounded"
        onClick={() => onInsertChart("Line")}
      >
        Insert Line Chart
      </button>
      <button
        className="mr-4 p-2 bg-red-500 text-white rounded"
        onClick={() => onInsertChart("Pie")}
      >
        Insert Pie Chart
      </button>
      <button
        className="mr-4 p-2 bg-yellow-500 text-white rounded"
        onClick={onInsertPicture}
      >
        Insert Picture
      </button>
      <button
        className="p-2 bg-purple-500 text-white rounded"
        onClick={onInsertTextBox}
      >
        Insert Text Box
      </button>
    </nav>
  );
};

export default Ribbon;
