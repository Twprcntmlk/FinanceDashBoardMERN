import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

type pieType = {
  name: string;
  value: number;
};
function pieChart({
  pieData,
  pieColors
}: {
  pieData: pieType[];
  pieColors: string[];
}) {
  return (
    <>
      <PieChart
        width={200}
        height={100}
        margin={{
          top: 0,
          right: -10,
          left: 10,
          bottom: 0
        }}
      >
        <Pie
          stroke="none"
          data={pieData}
          innerRadius={18}
          outerRadius={38}
          paddingAngle={2}
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pieColors[index]} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
}

export default pieChart;
