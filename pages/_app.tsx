import '@/styles/globals.css';
import { AppProps } from 'next/app';
import Layout from '@/components/layout';
import { themeSettings } from '../styles/theme';
import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from '@/components/layout/navbar';
<Navbar />

export default function MyApp({
  Component,
  pageProps: {...pageProps }
}: AppProps) {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
