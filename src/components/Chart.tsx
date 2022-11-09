import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import useChart from '../hooks/useChart';

function Chart(): React.ReactElement {
  const { chartData, chartKeyOne, chartKeyTwo } = useChart();
  return (
    <LineChart
      width={960}
      height={320}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey={chartKeyOne} stroke="#85DA47" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey={chartKeyTwo} stroke="#4FADF7" />
    </LineChart>
  );
}

export default Chart;
