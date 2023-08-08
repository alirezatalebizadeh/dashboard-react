import React from "react";
import "./Chart.css";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Line,
  AreaChart,
  Tooltip,
  YAxis,
  Area,
  CartesianGrid,
} from "recharts";


export default function Chart({ title, data, dataKey, grid }) {
  //! get data to create and show chart
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>

        {/* <AreaChart width="100%" data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart> */}
      </ResponsiveContainer>
    </div>
  );
}

//! responsiveContainer for responsive of chart
//! aspect to show chart
//! grid for line of chart
