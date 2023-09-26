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
import { GetKpisResponse } from 'pages/api/types';

type RevenueExpensesItem = {
  name: string;
  revenue: number;
  expenses: number;
};

const Row1 = ({ dataKpi }: { dataKpi: GetKpisResponse[] }) => {
  const { palette } = useTheme();

  // console.log(dataKpi[0])
  // console.log(dataKpi[0].monthlyData)
  const revenue = useMemo(() => {
    if (!dataKpi || dataKpi.length === 0) {
      return [];
    }
    return dataKpi[0].monthlyData.map(({ month, revenue }) => {
      return {
        name:
          month.substring(0, 3).charAt(0).toUpperCase() +
          month.substring(0, 3).slice(1),
        revenue: revenue/100
      };
    });
  }, [dataKpi]);

  const revenueExpenses: RevenueExpensesItem[] | [] = useMemo(() => {
    if (!dataKpi || dataKpi.length === 0) {
      return [];
    }
    return (
      dataKpi &&
      dataKpi[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name:
            month.substring(0, 3).charAt(0).toUpperCase() +
            month.substring(0, 3).slice(1),
          revenue: revenue/100,
          expenses: expenses/100
        };
      })
    );
  }, [dataKpi]);

  const RevAndExpChange = (revenueExpenses?: RevenueExpensesItem[] | []) => {
    if (!revenueExpenses || !revenueExpenses[11]) return '0%';

    const { revenue, expenses } = revenueExpenses[11];
    const denominator = revenue + expenses;
    if (denominator === 0) return '0%'; // Guard against division by zero

    const percentage = ((revenue - expenses) / denominator) * 100;
    return `${percentage >= 0 ? '+' : '-'}${Math.abs(percentage).toFixed(2)}%`;
  };

  const revenueProfit = useMemo(() => {
    if (!dataKpi || dataKpi.length === 0) {
      return [];
    }
    return (
      dataKpi &&
      dataKpi[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name:
            month.substring(0, 3).charAt(0).toUpperCase() +
            month.substring(0, 3).slice(1),
          revenue: revenue/100,
          profit: ((revenue - expenses)/100).toFixed(2)
        };
      })
    );
  }, [dataKpi]);

  return (
    <>
      <DashBoardBox gridArea="a" height={400}>
        <BoxHeaderBox
          title="Revenue and Expenses"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText={RevAndExpChange(revenueExpenses)}
        />
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 60
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: '0' }}
              style={{ fontSize: '10px' }}
              domain={[8000, 23000]}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashBoardBox>
      <DashBoardBox gridArea="b" height={400}>
        <BoxHeaderBox
          title="Profit and Revenue"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={revenueProfit}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: '10px' }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: '10px' }}
            />
            <Tooltip />
            <Legend
              height={20}
              wrapperStyle={{
                margin: '0 0 10px 0'
              }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="profit"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashBoardBox>
      <DashBoardBox gridArea="c" height={300}>
        <BoxHeaderBox
          title="Revenue Month by Month"
          subtitle="graph representing the revenue month by month"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%">
          <BarChart
            width={500}
            height={400}
            data={revenue}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '10px' }}
            />
            <Tooltip />
            <Bar dataKey="revenue" fill="url(#colorRevenue)" />
          </BarChart>
        </ResponsiveContainer>
      </DashBoardBox>
    </>
  );
};

export default Row1;
