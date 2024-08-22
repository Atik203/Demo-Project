// ChartComponent.tsx

import React from "react";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { ChartProps } from "../../types";

const ChartComponent: React.FC<ChartProps> = ({ type, data }) => {
  switch (type) {
    case "Bar":
      return <Bar data={data} />;
    case "Line":
      return <Line data={data} />;
    case "Pie":
      return <Pie data={data} />;
    case "Doughnut":
      return <Doughnut data={data} />;
    default:
      return null;
  }
};

export default ChartComponent;
