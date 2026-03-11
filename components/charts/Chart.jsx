"use client";

import bookData from "@/public/data/booksData.json";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Label,
  Tooltip,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

const data = [];

[...bookData].slice(0,9).map((i) =>
  data.push({
    name: i.bookName,
    totalPages: i.totalPages,
  }),
);

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} 
  ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} 
  ${x + (2 * width) / 3},${y + height} 
  ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { x, y, width, height, index } = props;
  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{ transition: "stroke-width 0.3s ease-out" }}
    />
  );
};

const CustomColorLabel = (props) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};
const CustomTick = ({ x, y, payload, index }) => {
  const colors = ["#3b82f6", "#10b981", "#f59e0b", "#f97316", "#ef4444", "#f9a8d4", "#000000", "#06b6d4"];
  const maxLength = 15;
  const name = payload.value.length > maxLength 
    ? payload.value.slice(0, maxLength) + "..." 
    : payload.value;

  return (
    <g transform={`translate(${x},${y})`}>
      <text textAnchor="middle" fill={colors[index]} fontSize={10}>
        <tspan x={0} dy={10}>{name}</tspan>
      </text>
    </g>
  );
};
export default function CustomShapeBarChart() {
  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "1000px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip cursor={{ fillOpacity: 0.5 }} />
      <XAxis dataKey="name"  interval={0} tick={CustomTick} />
      <YAxis width="auto" />

      <Bar dataKey="totalPages" fill="#8884d8" shape={TriangleBar} activeBar>
        <LabelList content={CustomColorLabel} position="top" />
      </Bar>

      <RechartsDevtools />
    </BarChart>
  );
}
