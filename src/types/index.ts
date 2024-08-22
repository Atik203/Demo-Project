// types.ts

export type ChartType = "Bar" | "Line" | "Pie" | "Doughnut" | "Area";

export interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    hoverBackgroundColor: string;
    hoverBorderColor: string;
    data: number[];
  }>;
}

export interface RibbonProps {
  onInsertChart: (type: ChartType) => void;
  onInsertTextBox: () => void;
  onInsertPicture: () => void;
}

export interface ChartProps {
  type: ChartType;
  data: ChartData;
}
