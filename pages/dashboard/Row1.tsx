import DashBoardBox from '../../components/layout/DashBoardBox';
import BoxHeaderBox from '../../components/layout/BoxHeaderBox';
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material';
import { useMemo } from 'react';
import {
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  BarChart,
  Bar,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
  Area
} from 'recharts';


const Row1 = () => {
  const { palette } = useTheme();



  // const revenue = useMemo(() => {
  //   return (
  //     data &&
  //     data[0].monthlyData.map(({ month, revenue }) => {
  //       return {
  //         name: month.substring(0, 3),
  //         revenue: revenue
  //       };
  //     })
  //   );
  // }, [data]);

  // const revenueExpenses = useMemo(() => {
  //   return (
  //     data &&
  //     data[0]?.monthlyData.map(({ month, revenue, expenses }) => {
  //       return {
  //         name: month.substring(0, 3),
  //         revenue: revenue,
  //         expenses: expenses
  //       };
  //     })
  //   );
  // }, [data]);
  // console.log();
  // const revenueProfit = useMemo(() => {
  //   return (
  //     data &&
  //     data[0]?.monthlyData.map(({ month, revenue, expenses }) => {
  //       return {
  //         name: month.substring(0, 3),
  //         revenue: revenue,
  //         profit: (revenue - expenses).toFixed(2)
  //       };
  //     })
  //   );
  // }, [data]);

  return (
    <>
      <DashBoardBox gridArea="a">

      </DashBoardBox>
      <DashBoardBox gridArea="b">

      </DashBoardBox>
      <DashBoardBox gridArea="c">

      </DashBoardBox>
    </>
  );
};

export default Row1;
