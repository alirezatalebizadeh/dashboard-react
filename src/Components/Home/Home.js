import React from "react";
import Feature from "./Futures/Feature";
import "./Home.css";
import Chart from "./Chart/Chart";
import { xAxiosData } from "../../Data/datas";
import WidgetSm from "./Widgetsm/WidgetSm";
import WidgetLg from "./WidgetLg/WidgetLg";
export default function Home() {
  return (
    <div className="home">
      <Feature />

      <Chart grid title="Month Sale" data={xAxiosData} dataKey="Sale" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}


