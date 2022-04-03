import React from 'react';
import BarChartDraw from '../Chart/BarChartDraw';
import LineChartDraw from '../Chart/LineChartDraw';
import PieChartDraw from '../Chart/PieChartDraw';

const Dashboard = () => {
  const data = [
    {
      month: 'Mar',
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: 'Apr',
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: 'May',
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: 'Jun',
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: 'Jul',
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: 'Aug',
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="grid grid-cols-2 px-40 py-10 gap-x-20 gap-y-10">
      <LineChartDraw data={data} />
      <BarChartDraw data={data} />
      <PieChartDraw data={data} />
    </div>
  );
};

export default Dashboard;
