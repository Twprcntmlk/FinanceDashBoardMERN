import DashBoardBox from '../../components/layout/DashBoardBox';
import BoxHeaderBox from '../../components/layout/BoxHeaderBox';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { Cell, Pie, PieChart } from 'recharts';
import React, { useState, useEffect, useMemo } from 'react';
import FlexBetweenBox from '@/components/layout/FlexBetweenBox';

const Row3 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[500]];

  const [kpiData, setKpiData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [transactionData, setTransactionData] = useState([]);


  return (
    <>
      <DashBoardBox gridArea="g"></DashBoardBox>
      <DashBoardBox gridArea="h"></DashBoardBox>
      <DashBoardBox gridArea="i"></DashBoardBox>
      <DashBoardBox gridArea="j"></DashBoardBox>
    </>
  );
};

export default Row3;
