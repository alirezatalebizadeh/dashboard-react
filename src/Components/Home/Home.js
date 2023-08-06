import React from "react";
import Feature from "./Futures/Feature";
import "./Home.css";
import Chart from "./Chart/Chart";
import xAxiosData from "../../Data/datas";
export default function Home() {
  return (
    <div className="home">
      <Feature />
      <Chart grid title="Month Sale" data={xAxiosData} dataKey="Sale" />
    </div>
  );
}
