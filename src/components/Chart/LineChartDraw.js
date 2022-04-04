import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const LineChartDraw = ({ data }) => {
  return (
    <div className=''>
      <LineChart width={400} height={250} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line dataKey="sell" stroke='#8884d8'/>
      </LineChart>
    </div>
  );
};

export default LineChartDraw;
