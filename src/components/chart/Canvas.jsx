import React from "react";
import ReactECharts from 'echarts-for-react';
export default function Canvas({ options }) {
  return (
    <>
      {options ? (
        <ReactECharts  option={options} />
      ) : null}
    </>
  );
}
