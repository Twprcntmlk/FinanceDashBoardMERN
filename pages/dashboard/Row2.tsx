import DashBoardBox from '../../components/layout/DashBoardBox';
import BoxHeaderBox from '../../components/layout/BoxHeaderBox';
import { Box, Typography, useTheme } from '@mui/material';
import React, { useMemo, useEffect, useState } from 'react';
import {
  Tooltip,
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
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
import FlexBetweenBox from '@/components/layout/FlexBetweenBox';

const pieData = [
  { name: 'Group A', value: 600 },
  { name: 'Group B', value: 400 }
];

const Row2 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];
  
  return (
    <>
      <DashBoardBox gridArea="d">

      </DashBoardBox>
      <DashBoardBox gridArea="e">

      </DashBoardBox>
      <DashBoardBox gridArea="f">

      </DashBoardBox>
    </>
  );
};

export default Row2;
