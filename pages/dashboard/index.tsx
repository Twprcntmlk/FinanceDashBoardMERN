import { Box, useMediaQuery, useTheme } from '@mui/material';
import { gridTemplateLarge, gridTemplateSmall } from '../../components/layout/gridTemplate';
import Row1 from './_Row1';
import Row2 from './_Row2';
import Row3 from './_Row3';
import { useState, useEffect } from 'react';
import { GetKpisResponse } from 'pages/api/types';
import { GetProductsResponse } from 'pages/api/types';
import { GetTransactionsResponse } from 'pages/api/types';
type Props = unknown;
//props: Props

const Dashboard = () => {
  const [kpiData, setKpiData] = useState<GetKpisResponse[]>([]);
  const [productData, setProductData] = useState<GetProductsResponse[]>([]);
  const [transactionData, setTransactionData] =
    useState<GetTransactionsResponse[]>([]);

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

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }, []);

  useEffect(() => {
    fetch('/api/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactionData(data);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }, []);

  console.log(kpiData[0]);
  console.log(productData[0]);
  console.log(transactionData[0]);
  // To display the fetched data (for debugging purposes)
  // ... rest of your component
  const mediumScreens = useMediaQuery('(min-width:1200px)');
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        mediumScreens
          ? {
              gridTemplateColumns: 'repeat(3, minmax(370px, 1fr))',
              gridTemplateRows: 'repeat(10, minmax(60px, 1fr))',
              gridTemplateAreas: gridTemplateLarge
            }
          : {
              gridAutoColumns: '1fr',
              gridAutoRows: '80px',
              gridTemplateAreas: gridTemplateSmall
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
