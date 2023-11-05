import React, { useState, useEffect, useMemo } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { GetKpisResponse } from 'pages/api/types';
import DashBoardBox from '../../components/layout/DashBoardBox';
import FlexBetweenBox from '@/components/layout/FlexBetweenBox';
import {
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  BarChart,
  Bar,
  Label,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
  Area
} from 'recharts';
import regression, { DataPoint } from 'regression';

type Props = unknown;
//props: Props
const Predictions = () => {
  const { palette } = useTheme();

  const [kpiData, setKpiData] = useState<GetKpisResponse[]>([]);
  const [isPredictions, setIsPredictions] = useState(false);

  useEffect(() => {
    fetch('/api/kpis')
      .then((response) => response.json())
      .then((data) => {
        setKpiData(data);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }, []);
  console.log(kpiData);
  const formattedData = useMemo(() => {
    if (!kpiData) return [];
    const monthData = kpiData[0]?.monthlyData;

    const formatted: Array<DataPoint> = monthData?.map(
      ({ revenue }, i: number) => {
        return [i, revenue];
      }
    );
    const regressionLine = regression.linear(formatted ? formatted : []);

    return monthData?.map(({ month, revenue }, i: number) => {
      return {
        name: month,
        'Actual Revenue': revenue,
        'Regression Line': regressionLine.points[i][1],
        'Predicted Revenue': regressionLine.predict(i + 12)[1]
      };
    });
  }, [kpiData]);
  console.log(formattedData);

  return (
    <DashBoardBox
      width="98vw"
      height="90vh"
      m="1rem"
      p="1rem"
      overflow="hidden"
    >
      <FlexBetweenBox m="1rem 2.5rem" gap="1rem">
        <Box>
          <Typography variant="h3">Revenue and Predictions</Typography>
          <Typography variant="h6">
            charted revenue and predicted revenue based on a simple linear
            regression model
          </Typography>
        </Box>
        <Button
          onClick={() => setIsPredictions(!isPredictions)}
          sx={{
            color: palette.grey[900],
            backgroundColor: palette.grey[700],
            boxShadow: '0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)'
          }}
        >
          Show Predicted Revenue for Next Year
        </Button>
      </FlexBetweenBox>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <LineChart
          data={formattedData}
          margin={{
            top: 20,
            right: 75,
            left: 20,
            bottom: 80
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: '10px' }}>
            <Label value="Month" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis
            domain={[12000, 26000]}
            axisLine={{ strokeWidth: '0' }}
            style={{ fontSize: '10px' }}
            tickFormatter={(v) => `$${v}`}
          >
            <Label
              value="Revenue in USD"
              angle={-90}
              offset={-5}
              position="insideLeft"
            />
          </YAxis>
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="Actual Revenue"
            stroke={palette.primary.main}
            strokeWidth={0}
            dot={{ strokeWidth: 5 }}
          />
          <Line
            type="monotone"
            dataKey="Regression Line"
            stroke="#8884d8"
            dot={false}
          />
          {isPredictions && (
            <Line
              strokeDasharray="5 5"
              dataKey="Predicted Revenue"
              stroke={palette.secondary[500]}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </DashBoardBox>
  );
};

export default Predictions;
