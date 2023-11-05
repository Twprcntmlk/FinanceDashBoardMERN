import DashBoardBox from '../../components/layout/DashBoardBox';
import BoxHeaderBox from '../../components/layout/BoxHeaderBox';
import FlexBetweenBox from '@/components/layout/FlexBetweenBox';
import dynamic from 'next/dynamic';
import { Box, Typography, useTheme } from '@mui/material';
import React, { useMemo } from 'react';
import {
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  LineChart,
  XAxis,
  YAxis,
  Line,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';

import { GetKpisResponse, GetProductsResponse } from 'pages/api/types';

const pieData = [
  { name: 'Group A', value: 600 },
  { name: 'Group B', value: 400 }
];

const DynamicPieChart = dynamic(
  () => import('../../components/layout/pieChart'),
  {
    ssr: false, // This will disable SSR for PieChart
    loading: () => <p>Loading...</p> // Optional: You can also provide a loading component
  }
);

const Row2 = ({
  dataKpi,
  productData
}: {
  dataKpi: GetKpisResponse[];
  productData: GetProductsResponse[];
}) => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];

  type operationalExpensesItem = {
    name: string;
    'Operational Expenses': number;
    'Non Operational Expenses': number;
  };
  const operationalExpenses: operationalExpensesItem[] | [] = useMemo(() => {
    if (!dataKpi || dataKpi.length === 0) {
      return [];
    } else {
      return (
        dataKpi &&
        dataKpi[0].monthlyData.map(
          ({ month, operationalExpenses, nonOperationalExpenses }) => {
            return {
              name: month.substring(0, 3),
              'Operational Expenses': operationalExpenses,
              'Non Operational Expenses': nonOperationalExpenses
            };
          }
        )
      );
    }
  }, [dataKpi]);

  type productExpenseItem = {
    id: string;
    price: number;
    expense: number;
  };

  const productExpenseData: productExpenseItem[] | [] = useMemo(() => {
    if (!productData || productData.length === 0) {
      return [];
    } else {
      return (
        productData &&
        productData.map(({ _id, price, expense }) => {
          return {
            id: _id.toString(),
            price: price / 100,
            expense: expense / 100
          };
        })
      );
    }
  }, [productData]);

  return (
    <>
      <DashBoardBox gridArea="d" height={300}>
        <BoxHeaderBox
          title="Operational vs Non-Operational Expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%">
          <LineChart
            data={operationalExpenses}
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
              orientation="left"
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
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="Non Operational Expenses"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Operational Expenses"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashBoardBox>
      <DashBoardBox gridArea="e" height={200}>
        <BoxHeaderBox title="Campaigns and Targets" sideText="+4%" />
        <FlexBetweenBox mt="0.25rem" gap="1.5rem" pr="1rem">
          <DynamicPieChart pieData={pieData} pieColors={pieColors} />
          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Target Sales</Typography>
            <Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}>
              83
            </Typography>
            <Typography variant="h6">
              Finance goals of the campaign that is desired
            </Typography>
          </Box>
          <Box flexBasis="40%">
            <Typography variant="h5">Losses in Revenue</Typography>
            <Typography variant="h6">Losses are down 25%</Typography>
            <Typography mt="0.4rem" variant="h5">
              Profit Margins
            </Typography>
            <Typography variant="h6">
              Margins are up by 30% from last month.
            </Typography>
          </Box>
        </FlexBetweenBox>
      </DashBoardBox>

      <DashBoardBox gridArea="f" height={350}>
        <BoxHeaderBox title="Product Prices vs Expenses" sideText="+4%" />
        <ResponsiveContainer width="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 25,
              bottom: 40,
              left: -10
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis
              type="number"
              dataKey="price"
              name="price"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '10px' }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type="number"
              dataKey="expense"
              name="expense"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '10px' }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis type="number" range={[20]} />
            <Tooltip formatter={(v) => `$${v}`} />
            <Scatter
              name="Product Expense Ratio"
              data={productExpenseData}
              fill={palette.tertiary[500]}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </DashBoardBox>
    </>
  );
};

export default Row2;
