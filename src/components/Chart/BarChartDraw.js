import React from 'react';
import {
    Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const BarChartDraw = ({ data }) => {
  return (
    <div>
      <p className='text-center text-lg mb-2 text-blue-400 font-semibold'>Investment vs Revenue</p>
      <BarChart width={400} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default BarChartDraw;
